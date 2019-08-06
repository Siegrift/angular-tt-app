# MyTtApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6

# Setup the repository

```bash
$ git clone https://github.com/koto/angular-tt-app/
$ cd angular-tt-app
$ git checkout --track origin/tt
```

## Use yarn instead of npm
This makes linking to local packages easier.

```bash
yarn global add @angular/cli
ng config -g cli.packageManager yarn
# In angular-tt-app/
yarn install
```

## Use local Angular framework (instead of an NPM package)

Prepare angular repository:

```bash
git checkout https://github.com/koto/angular
cd angular
git checkout --track origin/trusted-types
yarn install
```

Build modified NPM packages of the Angular framework:

```bash
yarn run bazel build //packages/core:npm_package //packages/platform-browser:npm_package //packages/http:npm_package //packages/common:npm_package //packages/router:npm_package
```

[Link](https://yarnpkg.com/lang/en/docs/cli/link/) the packages:

```
cd dist/bin/packages/core/npm_package && yarn link
cd dist/bin/packages/platform-browser/npm_package && yarn link
cd dist/bin/packages/http/npm_package && yarn link
cd dist/bin/packages/common/npm_package && yarn link
cd dist/bin/packages/router/npm_package && yarn link
```

```bash
cd /path/to/angular-tt-app
yarn link @angular/core
yarn link @angular/platform-browser
yarn link @angular/http
yarn link @angular/common
yarn link @angular/router
# same for other packages
```

## Development server

Run `ng serve` (or `yarn run ng serve`) for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
