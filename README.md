[![Kottans-Frontend][icon-kottans]][kottans-frontend]
[![MIT Licensed][icon-mit]][license]

# Weather App

An educational app built on custom components.

## Installation

Fork-and-clone or clone this repo.
Run `yarn install` or `npm install` to have
development dependencies installed and
to enjoy building scripts.

Navigate between tags to explore incremental
micro-framework development. This repo doesn't
contain the complete weather app code but rather
some boilerplate code.

This project contains no production dependencies
while requires ES6 compliant browser.
So in `index.html` add `type="module"` attribute
to the script tag at the bottom and open `index.html`
with your browser of the most recent version to have
the app up and running.

The codebase is ready for running with
[ParcelJS](https://parceljs.org/)
a zero configuration web app bundler that supports
[HMR](https://parceljs.org/hmr.html).

Run
 * `yarn global add parcel-bundler` to install ParcelJS
 * `yarn start` or `parcel index.html` to start server
 * `yarn build` to build distribution for publication
 * `yarn push-gh-pages` to publish built app on GitHub pages
   (you will need


## Tags

Explore incremental changes between tagged commits employing
git GUI or following git commands:
 * `git diff --name-status earlierTag laterTag`
   to list affected files
 * `git diff earlierTag laterTag`
   to explore changes to affected files
 * `git diff earlierTag laterTag -- filepath1 filepath2`
   to explore changes to specified files

Tags:
 * `simplest-app` - simple HTML + embedded JS app
 * `minimalistic-component` - introducing Component
 * `rich-render` - add richer render method
   supporting nested components
 * `props` - introduce props to customize component content
 * `render-components-from-html-string` - parse HTML string
   and instantiate components from parsed result
 * `encapsulated-state` - introduce component state
 * `state-back-propagation` - handle parent callbacks
   to propagate data (state) back to parent

[icon-kottans]: https://img.shields.io/badge/%3D(%5E.%5E)%3D-frontend-yellow.svg
[kottans-frontend]: https://github.com/kottans/frontend
[icon-mit]: https://img.shields.io/badge/license-MIT-blue.svg
[license]: https://github.com/Kottans/web/blob/master/LICENSE.md
