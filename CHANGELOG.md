## [3.1.1](https://github.com/ocean-ds/ocean-tokens/compare/v3.1.0...v3.1.1) (2021-11-09)


### Bug Fixes

* upgrade multiple dependencies with Snyk ([#189](https://github.com/ocean-ds/ocean-tokens/issues/189)) ([765d6e9](https://github.com/ocean-ds/ocean-tokens/commit/765d6e9bdd3f21118c54e091ba95918238e6138b))

# [3.1.0](https://github.com/ocean-ds/ocean-tokens/compare/v3.0.1...v3.1.0) (2021-06-17)

### Features

- **color:** change status colors and create deep variations ([#150](https://github.com/ocean-ds/ocean-tokens/issues/150)) ([3f86ad0](https://github.com/ocean-ds/ocean-tokens/commit/3f86ad0a6a635fc6fb1fb49964f0a73c6ac2efed))

## [3.0.1](https://github.com/ocean-ds/ocean-tokens/compare/v3.0.0...v3.0.1) (2021-06-15)

### Bug Fixes

- package.json & yarn.lock to reduce vulnerabilities ([#149](https://github.com/ocean-ds/ocean-tokens/issues/149)) ([34b58b7](https://github.com/ocean-ds/ocean-tokens/commit/34b58b715444acc8abfed11ea6def529089973a7))

# [3.0.0](https://github.com/ocean-ds/ocean-tokens/compare/v2.0.1...v3.0.0) (2021-06-09)

### Features

- change pkg name to ocean-tokens ([6892731](https://github.com/ocean-ds/ocean-tokens/commit/6892731fc4334a3c7629e66ef75b6f79ecaaf4a1))
- shrink import path ([9082433](https://github.com/ocean-ds/ocean-tokens/commit/9082433ced7fb972a6edf90fabeb452e4e662d6d))
- **web:** rename tokens.module.js to tokens.js ([c71e951](https://github.com/ocean-ds/ocean-tokens/commit/c71e951b42f788b02be85ea41804a3c0a1b56659))

### BREAKING CHANGES

- change pkg name from @useblu/tokens to @useblu/ocean-tokens
- omit the directory '/dist' of the imports path
- **web:** normalizes tokens filename for web renaming js exported

## [2.0.1](https://github.com/ocean-ds/ocean-tokens/compare/v2.0.0...v2.0.1) (2021-06-07)

### Bug Fixes

- package.json & yarn.lock to reduce vulnerabilities ([#133](https://github.com/ocean-ds/ocean-tokens/issues/133)) ([0585a7d](https://github.com/ocean-ds/ocean-tokens/commit/0585a7d79c3c7fb652ad26be55c27f00e9809cae))

# 2.0.0 (July 21, 2020)

### Changed

- Package structure to maintain a separation between platforms (PRs: [#51](https://github.com/ocean-ds/ocean-tokens/pull/51), [#50](https://github.com/ocean-ds/ocean-tokens/pull/50))

  ```
    /dist
      - /android
      - /assets
      - /ios
      - /web
  ```

### Added

- Font files used in design-system (Avenir, NunitoSans). (PR [#50](https://github.com/ocean-ds/ocean-tokens/pull/50))
- Mobile token files. (PR [#51](https://github.com/ocean-ds/ocean-tokens/pull/51))
- Font declaration file for web (@font-faces). (PR [#53](https://github.com/ocean-ds/ocean-tokens/pull/53))

# 1.0.0 (June 23, 2020)

### First stable release :rocket:

- Tokens remodeled and separated by categories, follow the [document](https://ocean-ds.github.io/ocean-tokens/)
- Design tokens avaliable in:
  - @useblu/tokens (npm)

# 0.1.0 (September 29, 2019)

### First tokens :tada::clap:

- Added base colors tokens [See Adobe XD prototype](https://xd.adobe.com/spec/780b750c-c8d9-4a3c-7d41-042f4c68f830-0e3a/)
- Added base font-family by platform
