# Wana Frontend

## Getting Started
Clone the repo, `cd` inside & run `npm install`.

After completing installation, run `npm start` to open up the app on `http://0.0.0.0:3000/` in your favorite browser.


## Initial Structure Notes

### Scaffolding choices
I went w/ [Marvin](https://github.com/workco/marvin) as the other more popular generator, [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate), seemed a bit heavy for our purposes and featured stack choices like `redux-saga` that are good choices, but may be more than this project needs and I personallty can't vouch for them, since I haven't used them. Also in Marvin's favor as boilerplate, it was created by another branding & ad agency as a starter for their projects. I disagree w/ a couple minor conventions, but they made good choices and probably have vaguely-similar software needs, and it was lightweight/simple enough to get up and running and customize it without much hassle.

Marvin's stack was also my favorite: Webpack 3, Babel, Sass, React, and Redux, with a pretty solid app structure (imo, of course). No need to read too many docs or learn a new tool - it was all packaged up and ready to go.


### Built with & why
* [Webpack](https://github.com/webpack/webpack) - Powerful compiler that's specialized for client-side JS apps. Compatible with most everything (including gulp/grunt, etc), but you don't need much more than this. Also very easy to have composable configurations, and interops w/ Node quite well for any future server-rendered react optimizations.
* [Babel](https://babeljs.io/) - Lets us write modern JS, takes care of JSX compiling, if we feel like getting fancy it can even open up newer features to JS w/out the need for browser support.
* [Sass](http://sass-lang.com/) - What the designer was writing the styles in, works great for our purposes. We could consider fancier options, but probably not worth it unless we want to seriously optimize css architecture.
* [React](https://reactjs.org/) - What the FE dev was most familiar with, apparent this didn't bother anybody. For real though, its a fast, efficient library for authoring UI in JS, plus it gives us access to some of the best state management patterns.
* [Redux](http://redux.js.org/) - Functional state management in React, gives us much more control over app state and how it gets mutated. Nifty toolchain, too!


### Directory Structure
This was almost completely from Marvin. This is all very much open for debate if people feel strongly or run into problems w/ the current structure.

Outstanding questions:
* How can Kevin best contribute templates to this repo? Does the current structure work well for him? 
* Should the `/old` folder be renamed if new templates will show up there?
* Should templates have an app backing them in this repo at all? 
* Do we want to hook this up to a CI server? If so, which one? I'm partial to CircleCI, personally.
```
/wana-frontend
  /build          - disposable folder for compiled code.
  /old            - where the previous PHP/gulp app & templates live. 
  /src            - source files for app
    /actions        - redux action creators go here
    /api            - generic API connection logic & helpers go here
    /assets         - static assets for the app
    /components     - reusable react-based UI components
    /config         - configuration for app; routing, store generation, server-rendering
    /dev            - middleware & config that's exclusive to running in dev-mode
    /reducers       - state reducer functions for Redux
    /styles         - scss source files
    /views          - React components that live at the top level on routes
  /webpack        - misc. webpack config files.
  ```

## Documentation

### npm tasks
* `start` - starts client app only in development mode, using webpack dev server
* `client:dev` - same as `start` plus fancy webpack dashboard
* `client:watch` - not to be used on it's own, starts webpack with client config in watch mode
* `client:build` - builds client application
* `client:preview` - runs client application in *production* mode, using webpack dev server (use for local testing of the client production build)
* `client:deploy` - Builds client for production & deploy to s3 bucket. Currently under dev, nonfunctional
* `server:watch` - not to be used on it's own, starts webpack with server config in watch mode
* `server:restart` - not to be used on it's own, server build run using `nodemon`
* `server:build` - not to be used on it's own, builds server application
* `server:dev` - starts server app only in development mode (use for testing server responses)
* `universal:dev` - runs both server and client in watch mode, automatically restarts server on changes
* `universal:build` - builds both server and client

### Running in dev mode
```
$ npm start
```

Visit `http://localhost:3000/` from your browser of choice.
Server is visible from the local network as well.

### Running it with [webpack dashboard](https://github.com/FormidableLabs/webpack-dashboard)
```
$ npm run client:dev
```
**Note for Windows users:** webpack dashboard still have issues with Windows, so use `npm start` until those are resolved.

### ![Running in the iTerm2](http://i.imgur.com/3oKTWrv.png)
**OS X Terminal.app users:** Make sure that **View → Allow Mouse Reporting** is enabled, otherwise scrolling through logs and modules won't work. If your version of Terminal.app doesn't have this feature, you may want to check out an alternative such as [iTerm2](https://www.iterm2.com/).

### Build client (production)
Build will be placed in the `build` folder.
```
$ npm run client:build
```

If your app is not running on the server root you should change `publicPath` at two places.

In `webpack.config.js` (ATM line 147):
```
output: {
  path: buildPath,
  publicPath: '/your-app/',
  filename: 'app-[hash].js',
},
```

and in `source/js/routes` (ATM line 9):
```
const publicPath = '/your-app/';
```

Don't forget the trailing slash (`/`). In development visit `http://localhost:3000/your-app/`.

### Running client in preview production mode
This command will start webpack dev server, but with `NODE_ENV` set to `production`.
Everything will be minified and served.
Hot reload will not work, so you need to refresh the page manually after changing the code.
```
npm run client:preview
```

### Universal dev mode
```
npm run universal:dev
```

Visit `http://localhost:8080/` from your browser of choice.
Server is visible from the local network as well.

### Universal build (production)
```
npm run universal:build
```

copy `package.json` and `build` folder to your production server

install only production dependencies and run server
```
npm install --production

node ./build/server.js
```

### Importing SVGs as components

Just import your `.svg` files from the `source/assets/svg/` folder, and you are good to go.

```
import CircleSvg from '../../../assets/svg/circle.svg';

// then in your render

<CircleSvg />

```

Check the example in [source/js/views/Dashboard/index.jsx](https://github.com/workco/marvin/blob/master/source/js/views/Dashboard/index.jsx#L5-L7)