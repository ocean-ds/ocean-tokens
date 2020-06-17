# Design tokens

[![Maintainability](https://api.codeclimate.com/v1/badges/3bd94959d7302d83057d/maintainability)](https://codeclimate.com/repos/5d9101d66ac2d031ba00001e/maintainability) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=Pagnet/design-tokens&identifier=206170935)](https://dependabot.com) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

This is an internal project at Blu Pagamentos powered by [Theo](https://github.com/salesforce-ux/theo) that provides design tokens for our design system.

> Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development – [Salesforce UX](https://www.lightningdesignsystem.com/design-tokens/)

## Installation

### Download and Install Manually

> For now, this is the only option available. In the future we'll publish in some package manager.

Tokens are available by plaftorm for download as packages in the [github releases page](https://github.com/Pagnet/design-tokens/releases).

## Usage

### Javascript

```js
import { createGlobalStyle } from 'styled-components';

// TODO
```

### Sass

```scss
// TODO
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change or send us a message on our [Slack Channel](https://useblu.slack.com/messages/CKTBW3170).

Please make sure to use the english language everywhere ;)

### Code of conduct

We have a [code of conduct](https://github.com/Pagnet/design-tokens/blob/master/CODE_OF_CONDUCT.md),
please follow it in all your interactions with the project.

### Contributing guide

Read the [contributing guide](https://github.com/Pagnet/design-tokens/blob/master/CONTRIBUTING.md)
to learn how to propose changes and understand our development process.

<details>
  <summary><strong>Pending features</strong> (click to expand)</summary>

##### Technical

- [x] Initial configuration to export the tokens on the platforms: Android, iOS and Web
- [ ] Configure the build process to generate the documentation for the tokens
- [ ] Add license
- [ ] Publish tokens on packages manager
- [x] Add contribution guide (Issue template, PR template)
- [ ] Host the versied documentation of the tokens
- [ ] Configure CI/CD (With Github Actions and Github Packages)

##### Non-technical

- [ ] Establish a roadmap of tokens (options first, decisions next)
  - _See [High-LevelTokenHierarchy](docs/High-LevelTokenHierarchy) file for any inspiration_

</details>

### Development setup

<details>
  <summary><strong>Requirements</strong> (click to expand)</summary>

- [Git](https://git-scm.com/) at `v2.21.0+`
- [Node.js](http://nodejs.org) at `v12.0.0+`
  - _We recommend using [NVM](https://github.com/nvm-sh/nvm)_
- [VS Code](https://code.visualstudio.com/) or other modern editor
  - _In VS Code these plugins makes the experience better: [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer), [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons) and [GitLen](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)_

</details>

Open your terminal and execute the following commands one by one to get started.

```
git clone git@github.com:Pagnet/design-tokens.git
cd design-tokens/
npm install
code .
```

#### Project Structure

```
TODO: Explain the structure
```

### Build Process

- Create or change some token definition
- Execute `npm run web` or `npm run android` in your terminal
- If no error occurred in the process will see your tokens in the `dist` folder

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/Pagnet/design-tokens/tags).

## Resources

- [Tokens in Design Systems](https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421)
- [Lightning, Salesforce's design system](https://lightningdesignsystem.com/design-tokens/)
- [Polaris, Shopify’s design system](https://github.com/Shopify/polaris-tokens)
