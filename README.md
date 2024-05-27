# SolidStart

Everything you need to build a Solid project, powered by [`solid-start`](https://start.solidjs.com);

## Creating a project

```bash
# create a new project in the current directory
bun create solid

# create a new project in my-app
bun create solid my-app
```

## Developing

Once you've created a project and installed dependencies with `bun install`, start a development server:

```bash
bun dev
```

## Building

Solid apps are built with _presets_, which optimise your project for deployment to different environments.

By default, `npm run build` will generate a Node app that you can run with `npm start`. To use a different preset, add it to the `devDependencies` in `package.json` and specify in your `app.config.js`.

## Testing

Tests are written with `vitest`, `@solidjs/testing-library` and `@testing-library/jest-dom` to extend expect with some helpful custom matchers.

To run them, simply start:

```sh
bun run test
```

## This project was created with the [Solid CLI](https://solid-cli.netlify.app)
