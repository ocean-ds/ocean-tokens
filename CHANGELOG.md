# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## 2.0.0 (July 21, 2020)

### Changed

- Package structure to maintain a separation between platforms (PRs: [#51](https://github.com/Pagnet/design-tokens/pull/51), [#50](https://github.com/Pagnet/design-tokens/pull/50))

  ```
    /dist
      - /android
      - /assets
      - /ios
      - /web
  ```

### Added

- Font files used in design-system (Avenir, NunitoSans). (PR [#50](https://github.com/Pagnet/design-tokens/pull/50))
- Mobile token files. (PR [#51](https://github.com/Pagnet/design-tokens/pull/51))
- Font declaration file for web (@font-faces). (PR [#53](https://github.com/Pagnet/design-tokens/pull/53))

## 1.0.0 (June 23, 2020)

### First stable release :rocket:

- Tokens remodeled and separated by categories, follow the [document](https://pagnet.github.io/design-tokens/)
- Design tokens avaliable in:
  - @useblu/tokens (npm)

## 0.1.0 (September 29, 2019)

### First tokens :tada::clap:

- Added base colors tokens [See Adobe XD prototype](https://xd.adobe.com/spec/780b750c-c8d9-4a3c-7d41-042f4c68f830-0e3a/)
- Added base font-family by platform
