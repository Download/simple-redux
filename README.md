Sightmap+
=========

This is the codebase for the frontend system for the Sightmap product.

The project itself is a [ReactJS](https://facebook.github.io/react/) visual
application that uses [Redux](https://github.com/rackt/redux) to manage behavior.
It's a fairly beefy frontend app - we've got:

- A [gulp](http://gulpjs.com/) built routine
- [Webpack](https://webpack.github.io/) javascript module management
- [Babel](https://babeljs.io/) isomorphic/universal javascript via ES6

Just to get the build system set up. Everything is minified, also, so if you're
running into an error, expect to use [sourcemaps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/).

---

## Building

To get a clone of this project up-and-running, just install the dependencies
and run `gulp`:

```bash
npm install && gulp
```

> Note, you should have `npm` and friends installed already on your system. To
> get 'em, check out [nvm](https://github.com/creationix/nvm).

This should build a "distribution" file under `dist/bundle.js`. The `index.html`
file sets-up the window and silly HTTP-header stuff to initialize the web application
as a wrapper, then loads this file basically. When `index.html` is loaded in a
browser, it should take-over the DOM element and start the ReactJS application.

## Developing

The code in this project was particularly build to be robust - we expect this codebase
to _last_ - over time, it should behaive the same as it did a year ago. To achieve
this, we've provided excessive testing and documentation for the codebase - to
exemplify intent verbatim, and to exasperate design for well-prepared improvement.

### Testing

The product comes with a suite of tests that can be run with `npm test`. They
are designed to be _broadly covering_ - in that we want to catch as many edge-cases
of our code as we can. I'm using a property-based testing framework called
[jsverify](http://jsverify.github.io/) to make strong assertions about the code.

Run the tests:

```bash
npm test
```

### Documentation

To build the documentation, run the following command:

```bash
jsdoc src/ --package package.json --readme README.md -r
```
