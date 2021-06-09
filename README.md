<h1 align="center">
  Ocean Tokens
</h1>

<p align="center">
  <a href="https://github.com/ocean-ds/ocean-tokens/actions">
    <img alt="Actions Status" src="https://github.com/ocean-ds/ocean-tokens/workflows/CI/badge.svg">
  </a>
  <a href="https://sonarcloud.io/dashboard?id=ocean-ds_ocean-tokens">
    <img alt="Sonarcloud Status" src="https://sonarcloud.io/api/project_badges/measure?project=ocean-ds_ocean-tokens&metric=alert_status">
  </a>
  <a href="https://github.com/ocean-ds/ocean-tokens/blob/master/LICENSE">
    <img alt="GitHub License" src="https://img.shields.io/github/license/ocean-ds/ocean-tokens">
  </a>
  <a href="https://github.com/ocean-ds/ocean-tokens/graphs/commit-activity">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/ocean-ds/ocean-tokens">
  </a>
  <a href="https://github.com/ocean-ds/ocean-tokens/network/updates">
    <img alt="Dependabot" src="https://img.shields.io/badge/Dependabot-enabled-brightgreen">
  </a>
  <a href="https://github.com/prettier/prettier">
    <img alt="Prettier code style" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg">
  </a>
  <a href="https://github.com/semantic-release/semantic-release">
    <img alt="Semantic release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
  </a>
  <a href="https://conventionalcommits.org">
    <img alt="Conventional Commits" src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg">
  </a>
  <a href="http://makeapullrequest.com">
    <img alt="Conventional Commits" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg">
  </a>
</p>

This project powered by [Theo](https://github.com/salesforce-ux/theo) provides design tokens to the [Ocean](https://zeroheight.com/9c9b2b3aa/p/257272-ocean-ds/t/968532) design system.

> Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development – [Salesforce UX](https://www.lightningdesignsystem.com/design-tokens/)

## Installation

```sh
yarn add @useblu/ocean-icons-react
```

or

```sh
npm i @useblu/ocean-icons-react
```

## Usage

### Javascript

```js
import styled from 'styled-components';
import {
  fontFamilyHighlight,
  fontSizeLg,
  fontWeightExtrabold,
  lineHeightMedium,
  colorInterfaceLightPure,
} from '@useblu/ocean-tokens/web/tokens.module.js';

export const Heading1 = styled.h1`
  font-family: ${fontFamilyHighlight};
  font-size: ${fontSizeLg};
  font-weight: ${fontWeightExtrabold};
  line-height: ${lineHeightMedium};
  color: ${colorInterfaceLightPure};
`;
```

### Sass

```scss
@import '~@useblu/ocean-tokens/web/tokens.scss';

.h1 {
  font-family: $font-family-highlight;
  font-size: $font-size-lg;
  font-weight: $font-weight-extrabold;
  line-height: $line-height-medium;
  color: $color-interface-light-pure;
}
```

## Contributing

Whether you're helping us fix bugs, improve the docs, or spread the word, we'd love to have you as part of this project! :blue_heart: Read below to learn how you can take part of it.

### Code of Conduct

We adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](.github/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

### Contributing Guide

Read our [contributing guide](.github/CONTRIBUTING.md) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes.

### Good First Issues

To help you get your feet wet and get you familiar with our contribution process, we have a list of [good first issues](https://github.com/ocean-ds/ocean-tokens/labels/good%20first%20issue) that contain bugs which have a relatively limited scope. This is a great place to get started.

## License

All packages are licensed under the terms of the [GPL-3.0 License](LICENSE).
