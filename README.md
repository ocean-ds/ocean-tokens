# Design tokens

[![ocean-ds](https://circleci.com/gh/ocean-ds/ocean-tokens/tree/master.svg?style=shield)](https://circleci.com/gh/ocean-ds/ocean-tokens/tree/master) [![Maintainability](https://api.codeclimate.com/v1/badges/3bd94959d7302d83057d/maintainability)](https://codeclimate.com/repos/5d9101d66ac2d031ba00001e/maintainability) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=ocean-ds/ocean-tokens&identifier=206170935)](https://dependabot.com) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

This is an internal project at Blu Pagamentos powered by [Theo](https://github.com/salesforce-ux/theo) that provides design tokens for our design system.

> Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development – [Salesforce UX](https://www.lightningdesignsystem.com/design-tokens/)

## Installation

### Download and Install Manually

Tokens are available by plaftorm for download as packages in the [github releases page](https://github.com/ocean-ds/ocean-tokens/releases).

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
} from '@useblu/tokens';

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
@import '~@useblu/tokens/dist/tokens.scss';

.h1 {
  font-family: $font-family-highlight;
  font-size: $font-size-lg;
  font-weight: $font-weight-extrabold;
  line-height: $line-height-medium;
  color: $color-interface-light-pure;
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to use english everywhere ;)

### Code of conduct

We have a [code of conduct](.github/CODE_OF_CONDUCT.md),
please follow it in all your interactions with the project.

### Contributing guide

Read the [contributing guide](https://github.com/ocean-ds/ocean-tokens/blob/master/CONTRIBUTING.md)
to learn how to propose changes and understand our development process.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/ocean-ds/ocean-tokens/tags).

## Resources

- [Tokens in Design Systems](https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421)
- [Lightning, Salesforce's design system](https://lightningdesignsystem.com/design-tokens/)
- [Polaris, Shopify’s design system](https://github.com/Shopify/polaris-tokens)
