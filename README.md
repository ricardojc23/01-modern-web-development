# The Modern Web

---

## Objectives

* Describe the modern web development ecosystem using words like Node.js, npm, Transpiler, and Bundler
* Use the features of modern JavaScript to build front-end applications
* Use Node.js and npm to manage application dependencies

---

# The Modern Web Development Ecosystem

----

> To understand why we use the tools we use today, we should take a look at what we did _before_ those tools existed.

----

### Static File Development

* Just HTML, CSS and JavaScript files (the only 3* languages the web browser understands...)
* Libraries (like jquery, lodash or bootstrap) are included from a CDN or served directly from the same folder
* No server run time (Like PHP, Python, Java or C#)
* No pre-build or post-build process
* Just code the files and then open them up in a web browser or host them on a static file server or CDN
* The code your users are running in their web browser is exactly the code you wrote

----

### Let's discuss: What are some downsides to building websites this way?

----

### Things To Consider

* File Management - What happens to our code base when we have 10+ html files, 20+ javascript files and 10+ css files?
* Code Re-use - How can we share common code / elements / styles / layout without duplication (copy paste)?
* Dependency Management - How do we manage all of our dependencies (things like jquery, lodash, bootstrap etc.)?
* Browser Support - What if some of our users are using older browsers, or a web browser we didn't test with? Will our website still work?
* Page Load Time - With 30+ files to download, will the site load quick enough? Will we be putting a strain on our users bandwidth?

----

## How We Manage These Things in Modern Web Development

----

### File Management

We can treat all of our files like *modules* and share them across our code base. We create / define them once, and then import and use them where needed. (Tools like [Webpack](https://webpack.js.org/)/[Rollup](https://rollupjs.org/guide/en/)/[Parcel](https://parceljs.org/) help with this)

----

### Code Re-use

If we break our UI down into unique individual components, those components can be shared and re-used across our code base. (Component libraries like React, Vue, Angular, Lit help with this)

----

### Dependency Management

We can easily manage what version of a given dependency is needed for our project, and import those dependencies as needed (npm uses the package.json file for this)

----

### Browser Support

Tools like [Babel](https://babeljs.io/) allow us to write code that uses the latest features of JavaScript or custom languages like [JSX](https://reactjs.org/docs/introducing-jsx.html), the code we write is then *transpiled* into code that is currently [supported by all web browsers](https://caniuse.com/). CSS has similar tools like [SASS](https://sass-lang.com/), [Less](https://lesscss.org/) or [Stylus](https://stylus-lang.com/) and [Post-CSS](https://postcss.org/) which automatically adds browser prefixes to our CSS properties as needed.

----

### Page Load Time

After being *transpiled* our code can be *minified* and *bundled* to produce the smallest number of files and smallest possible file size for our end users.

---

# Use the features of modern JavaScript to build front-end applications

----

### JavaScript -> ECMAScript

* JS has a _long_ history and was initially introduced in 1995.
* Feature support across web browsers was notoriously inconsistent (competing web browsers like NetScape and Internet Explorer would only support certain features or have different implementations)
* The ECMAScript standard committee was formed to unify the language
  * The committee consists of industry veterans from many of the top companies. They meet and decide on what new features will be in the language.

----

### ECMAScript

* ECMAScript 3 was released in 1999
* ECMAScript 4 does not exist...
* ECMAScript 5 was released in 2009
* ECMAScript 2015 (version 6) or ES6 or ES2015 brought a large list of changes to the language. These changes were welcomed by the JS community, and also brought developers from other languages into the JS community.
  * With the release of ES2015, the ECMAScript committee committed to releasing a new version of ECMAScript every year! We are now at ES2021! Each subsequent release has been much smaller in the number of features it adds

----

## ECMAScript 2015 Features

* [Arrow Functions](https://ponyfoo.com/articles/es6-arrow-functions-in-depth)
  * Lexical `this` binding
* [Template Strings](http://ponyfoo.com/articles/es6-template-strings-in-depth)
* [Destructuring](http://ponyfoo.com/articles/es6-destructuring-in-depth)
* [Modules](https://ponyfoo.com/articles/es6-modules-in-depth)
* [let and const variable declarations](http://ponyfoo.com/articles/es6-let-const-and-temporal-dead-zone-in-depth)
  * Block Scope
* [Object literal features](http://ponyfoo.com/articles/es6-object-literal-features-in-depth) (property assignment and computed property assignment)
* [Spread and Rest Operators](http://ponyfoo.com/articles/es6-spread-and-butter-in-depth)
* [Functions - Default parameter assignment](https://ponyfoo.com/articles/es6-spread-and-butter-in-depth#default-operator) 
* [Map](https://ponyfoo.com/articles/es6-maps-in-depth) and [Set](https://ponyfoo.com/articles/es6-weakmaps-sets-and-weaksets-in-depth) Data Structures
* [Classes](http://ponyfoo.com/articles/es6-classes-in-depth)
* [Symbols](https://ponyfoo.com/articles/es6-symbols-in-depth), [Iterators](https://ponyfoo.com/articles/es6-iterators-in-depth) and [Generators](https://ponyfoo.com/articles/es6-generators-in-depth)
* Tail Calls
* [Proxies](https://ponyfoo.com/articles/es6-proxies-in-depth) and the [Reflect API](https://ponyfoo.com/articles/es6-reflection-in-depth)

---

# Use Node.js and npm to manage application dependencies

----

## Node.js

* Created in 2009 by Ryan Dahl
* A JavaScript runtime environment
* Can be used to run JavaScript on a _server_
  * Build APIs
  * Access Databases
  * Process files
  * General scripting
* We will use it to run our build tasks (general scripting!) (the react code we write will _not_ be running on a server, it will only be running in the browser as static files!)

---

## NPM

* A package manager - manage the dependencies of our code base
* We will use this to install react as a dependency later!
* [npmjs.com](https://www.npmjs.com/) - a repository for JavaScript dependencies, anyone can publish a module here (the react dependency is hosted [here](https://www.npmjs.com/package/react))
* We can install packages and automatically add them to our `package.json` file with `npm install <package-name>`

----

## package.json

This file includes information about our project and lists all of the dependencies we have installed. This file should be committed to our repo.

```json
{
  "name": "01-the-modern-web",
  "version": "1.0.0",
  "description": "",
  "scripts": {},
  "keywords": [],
  "author": "",
  "type": "module",
  "license": "MIT",
  "dependencies": {},
  "devDependencies": {}
}
```

----

## `node_modules` folder

All of the dependencies we install are stored in this folder (for every project we create!). This folder should _not_ be commited to git (be sure to add it to your `.gitignore` file).

---

# The Modern Web

---

## Objectives

* Describe the modern web development ecosystem using words like Node.js, npm, Transpiler, and Bundler
* Use the features of modern JavaScript to build front-end applications
* Use Node.js and npm to manage application dependencies
