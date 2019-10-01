# Design tokens

[![Maintainability](https://api.codeclimate.com/v1/badges/3bd94959d7302d83057d/maintainability)](https://codeclimate.com/repos/5d9101d66ac2d031ba00001e/maintainability) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=Pagnet/design-tokens&identifier=206170935)](https://dependabot.com) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

This is an internal project at Blu Pagamentos powered by [Style Dictionary](https://amzn.github.io/style-dictionary/#/) that provides design tokens for our design system.

> Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development – [Salesforce UX](https://www.lightningdesignsystem.com/design-tokens/)

## Installation

### Download and Install Manually

> For now, this is the only option available. In the future we'll publish in some package manager.

Tokens are available by plaftorm for download as packages in the [github releases page](https://github.com/Pagnet/design-tokens/releases).

## Usage

### Javascript

```js
import { createGlobalStyle } from 'styled-components';
import { TOKEN_COLOR_BASE_WHITE, TOKEN_FONT_FAMILY_BASE } from 'utils/tokens';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${TOKEN_FONT_FAMILY_BASE};
    background-color: ${TOKEN_COLOR_BASE_WHITE};
  }
`;
```

### Sass

```scss
@import 'tokens';

body {
  font-family: $TOKEN_FONT_FAMILY_BASE;
  background-color: $TOKEN_COLOR_BASE_WHITE;
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue on our [JIRA Project](https://useblu.atlassian.net/projects/UXUI/issues) first to discuss what you would like to change or send us a message on our [Slack Channel](https://useblu.slack.com/messages/CKTBW3170).

Please make sure to use the english language everywhere ;)

<details>
  <summary><strong>Pending features</strong> (click to expand)</summary>

##### Technical

- [x] Initial configuration to export the tokens on the platforms: Android, iOS and Web
- [ ] Configure the build process to generate the documentation for the tokens
- [ ] Add tests
- [ ] Add license
- [ ] Publish tokens on npm
- [ ] Add contribution guide
- [ ] Host the versied documentation of the tokens
- [ ] Configure CI/CD

##### Non-technical

- [x] Add base tokens of colors and typography
- [ ] Add base tokens of times and shadows
- [ ] Establish a roadmap of tokens (options first, decisions next)
  - _See [High-LevelTokenHierarchy](docs/High-LevelTokenHierarchy) file for any inspiration_

</details>

### Development setup

<details>
  <summary><strong>Requirements</strong> (click to expand)</summary>

- [Git](https://git-scm.com/) at `v2.21.0+`
- [Node.js](http://nodejs.org) at `v8.0.0+`
  - _We recommend using [NVM](https://github.com/nvm-sh/nvm)_
- [Yarn](https://yarnpkg.com/en/) at `v1.2.0+`
- [VS Code](https://code.visualstudio.com/) or other modern editor
  - _In VS Code these plugins makes the experience better: [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer), [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons) and [GitLen](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)_

</details>

Open your terminal and execute the following commands one by one to get started.

```
git clone git@github.com:Pagnet/design-tokens.git
cd design-tokens/
yarn install
code .
```

#### Project Structure

- `dist`: contains distributed tokens by platforms
- `docs`: contains extra docs (linked from README.md)
- `src`: contains the source code. The codebase is written in Json Standard.
  - `src/globals`: contains definition of tokens that are common, that don't depend on the specific "platform", eg. the base grayscale colors, the font sizes, etc.
  - `src/platforms`: contains definition of tokens that depend on the "platform", eg. the font family used in the application or website (eg. a font stack like "myriad-pro, 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif" on web, "San Francisco" in iOS, "Roboto" in Android)
- `templates`: contains customs templates to generate design tokens files with custom formats
- `build.js`: the style-dictionary build configuration

### Build Process

- Create or change some token definition
  - _This project follows the [CTI structure](https://amzn.github.io/style-dictionary/#/properties?id=category-type-item)_
- Execute `yarn build` in your terminal
  - _See style-dicionary [build process](https://amzn.github.io/style-dictionary/#/build_process) for more details_
- If no error occurred in the process will see your token in the `dist` folder

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/Pagnet/design-tokens/tags).

## Resources

- [Tokens in Design Systems](https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421)
- [How to manage your Design Tokens with Style Dictionary](https://medium.com/@didoo/how-to-manage-your-design-tokens-with-style-dictionary-98c795b938aa)
- [Lightning, Salesforce's design system](https://lightningdesignsystem.com/design-tokens/)
- [Polaris, Shopify’s design system](https://github.com/Shopify/polaris-tokens)
