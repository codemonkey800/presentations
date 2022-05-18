# Presentations

## Quick Start

### Setup Node.js

We use Node.js and various packages on NPM for building napari hub. For
package management, we use [yarn](https://classic.yarnpkg.com/en/).

It's recommended you use NVM so you don't have to manage multiple Node.js versions yourself:

- Bash: [nvm](https://github.com/nvm-sh/nvm)
- Fish: [nvm.fish](https://github.com/jorgebucaran/nvm.fish)
- Zsh: [zsh-nvm](https://github.com/lukechilds/zsh-nvm)

When you have NVM setup, run the following commands:

```sh
# Installs Node.js version defined in `.nvmrc`
nvm install

# Uses project defined Node.js version
nvm use

# Install yarn globally
npm -g install yarn

# Install project dependencies
yarn install
```

### Start Development Mode

To start the frontend in [development mode](./docs/tooling#development-mode),
run the following command:

```sh
yarn dev
```

Any changes to the code will [fast
refersh](https://nextjs.org/docs/basic-features/fast-refresh) the browser UI.

### Building for Production

To build the frontend into a static website, run:

```sh
yarn build
```

The HTML, JS, and CSS will be available in the `dist/` directory.
