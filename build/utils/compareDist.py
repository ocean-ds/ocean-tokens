"""Compare generated tokens, preserving values, types and Android attributes."""
import json
import re
import subprocess
import sys
from pathlib import Path
from xml.etree import ElementTree


def tokens(path):
    content = path.read_text()
    if path.suffix == '.xml':
        return {node.attrib['name']: (node.tag, node.attrib, node.text)
                for node in ElementTree.fromstring(content)}
    if path.suffix == '.js':
        result = json.loads(subprocess.check_output([
            'node', '-e', 'console.log(JSON.stringify(require(process.argv[1])))',
            str(path.resolve())]))
        result.pop('__esModule', None)
        return result
    if path.suffix == '.scss':
        return dict(re.findall(r'^\$([^:]+): (.*);$', content, re.M))
    if path.suffix == '.ts':
        return dict(re.findall(r'^export (?:const|let) (\w+): (.*);$', content, re.M))
    return dict(re.findall(r'^  "([^"]+)": (.*?),?$', content, re.M))


before, after = map(Path, sys.argv[1:])
names = {'opacityLevelSoft', 'fontSizeXxxxs', 'fontWeightBlack',
         'lineHeightExtraTight', 'lineHeightExtraComfy', 'letterSpacingWide'}
families = {'fontFamilyBaseWeightBlack', 'fontFamilyHighlightWeightBlack'}
web = json.loads(subprocess.check_output([
    'node', '-e', 'console.log(JSON.stringify(require(process.argv[1])))',
    str((after / 'web/tokens.js').resolve())]))
for key, value in dict(opacityLevelSoft='0.24', fontSizeXxxxs='10px',
                       fontWeightBlack=900, lineHeightExtraTight=0.8,
                       lineHeightExtraComfy=1.6, letterSpacingWide='0.18em').items():
    assert web[key] == value, (key, web[key])
print('| Output | Existing unchanged | Added | Changed / removed |')
print('| --- | ---: | --- | ---: |')
for old in sorted(before.rglob('*')):
    if not old.is_file():
        continue
    relative = old.relative_to(before)
    new = after / relative
    assert new.exists(), f'Removed file: {relative}'
    if relative.parts[0] not in ('web', 'android', 'ios'):
        if relative.parts[0] == 'assets' and relative.name != 'fonts.css':
            assert old.read_bytes() == new.read_bytes(), relative
        continue
    previous, current = tokens(old), tokens(new)
    for name, value in previous.items():
        assert name in current and current[name] == value, (relative, name)
    added = sorted(current.keys() - previous.keys())
    expected = names
    if relative.parts[0] == 'ios':
        expected = {
            'tokens-color.json': set(), 'tokens-shadow.json': set(),
            'tokens-size.json': {'opacityLevelSoft'},
            'tokens-fontNames.json': families,
            'tokens-typography.json': (names - {'opacityLevelSoft'}) | families,
            'tokens.json': names | families,
        }[relative.name]
    if relative.suffix in ('.scss', '.xml'):
        expected = {re.sub(r'([A-Z])', lambda m: '-' + m[1].lower(), n)
                    for n in expected}
        if relative.suffix == '.xml':
            expected = {'ocean_' + n.replace('-', '_') for n in expected}
    assert set(added) == expected, (relative, added, expected)
    print(f'| {relative} | {len(previous)} | {", ".join(added) or "—"} | 0 |')
