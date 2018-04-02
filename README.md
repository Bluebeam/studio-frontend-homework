# Bluebeam Web Development Homework

### Setup
Please make sure you have the following installed locally:

```
node >= 8.9.3
npm >= 5.5.1
```

To run the project in your console, type:
```
npm install
npm run dev
```
You should now be able to view the project page at `http://localhost:3001/`.

### Notes on this project

This project uses hot reloading for development, so normally you should see your updates without having to refresh the web page.

JavaScript is transpiled via [Babel](https://babeljs.io/) and [Webpack](https://webpack.js.org/), and we encourage you to use modern ES2015+ syntax and features.

CSS is compiled with [PostCSS](https://github.com/postcss/postcss) and [cssnext](http://cssnext.io/).

The project is setup to allow writing of units tests with the following libraries:
 - [Karma](https://karma-runner.github.io/2.0/index.html)
 - [Mocha](https://mochajs.org/)
 - [Chai](http://chaijs.com/)
 - [Sinon](http://sinonjs.org/)
 - [Enzyme](http://airbnb.io/enzyme/)

This project's persistence layer uses a very simple JSON based library called [json-server](https://github.com/typicode/json-server). The contents of the "database" are stored in `server/db.json`. A very simple example of interacting with this json-server is provided in `client/src/services/playerService.js`.
