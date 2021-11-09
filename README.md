# React, TypeScript, Webpack, Mobx, SASS Template

Portfolio webapp to link to other repos on github and serve as a main page when published; includes react, typescript, webpack, mobx, sass and a custom module declaration for creating react components from SVGs.

### 3...

Install:

```
npm install
```

#### 2...

Run:

```
npm run dev
```

#### 1...

Build:

```
npm run build
```

#### GO!

Show the world, with github pages! See the full instructions for setup here: https://github.com/gitname/react-gh-pages

The gist is:

```
npm install gh-pages --save-dev
```

In package.json, add a 'homepage' property with the url to your project:

```
//...
"homepage": "http://username.github.io/repo-name"
```

Still in package.json, under the 'scripts' section, add a couple more scripts:

```
"scripts": {
  //...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Finally, when you want to deploy just run:

```
npm run deploy
```
