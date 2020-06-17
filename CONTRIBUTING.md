# Contributing

When contributing to this repository, please first discuss the change you wish to make via an issue with the owners of this repository before making a change. Adding tests, documentation updates such as typo fixes and other improvements are welcome at any time without submitting an issue first.

Please note we have a [code of conduct](https://github.com/Pagnet/design-tokens/blob/master/CODE_OF_CONDUCT.md), please follow it in all your interactions with the project.

---

## Generating the design tokens

In a terminal, paste the following instructions.

### Web

```
git clone git@github.com:Pagnet/design-tokens.git
cd design-tokens
yarn
yarn run web
```

Tokens are exported under the dist/ folder for consumption by external projects:

```
tokens.scss
tokens.module.js
tokens.json
```

---

## Editing design tokens

Design tokens source files are in the `./src` directory, in YAML format.

Adding, removing, and updating design tokens should be discussed in the issues of this project before contributing to code changes.

---

## Releasing

When releasing a new version, follow these steps on `master`:

1.  Update [CHANGELOG.md](https://github.com/Pagnet/design-tokens/blob/master/CHANGELOG.md) and commit the changes
2.  Run `yarn version` and assign a new version
3.  Run `git push --follow-tags`