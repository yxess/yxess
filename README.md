<p align="center"><img src="https://yxess.github.io/assets/banner.png"/></p>

Yxess is a sexy, modular and blazing-fast static site generator based on Vanilla & Node JS. Yxess is like a silk Gatsby, with its own package manager (alternative to `npm`), with compatibility with almost any package. Yxess spits out static files, and is therefore a **static site generator**. Yxess is a work-in-progress, so please take it on a test run!

- [Why](#why)
- [Installation](#installation)
- [Packages](#packages)
- [A general Yxess project looks like...](#a-general-yxess-project-looks-like)
- [Contribute](#contribute)
- [Links](#links)
- [Bonus](#why-learn-all-this-nonsense)

## Why

### What is a Static Site Generator?

Static site generatorsare well-known. In summary, these allow you to write dynamic code, and compiles them in to a directory (fancy word for folder). These compiled files are **static**, meaning HTML, JavaScript & CSS. Thanks to this, originally dynamic-written content can be served statically to the end user!

### What makes Yxess so special?

Yxess is a static site generator based around a smooth look and amazing community. There are tons of packages that work seemlessly, giving you extensions beyond your wildest dreams. Things like these allows you to focus on the content without thinking about the look, **or** make a thrilling design with less effort and more love.

Also, Yxess gives you complete control over your end-produced files. There are many times where you really want to change a small thing in Pure CSS in the production result, but due to compile automation, it gets complex. Yxess gives you a `raw` directory, which is injected into the static result before the end. This way, you can manipulate the JS and CSS super easily, whenever needed, in raw formats.

Finally, using a React (-like), Styled Components system, you get power over your web application.

## Installation

Ready to grab Yxess? Let's start!

### From source (requires `npm`)

```bash
git clone https://github.com/yxess/yxess.git
cd yxess
npm install -g
```

### From `npm` packages

```bash
npm install -g yxess
```

More ways to install coming soon, promise!

## Packages

Yxess has a custom written package manager, built into the `yxess` command, that allows you to install & use many different superpowers.

### What about `npm`?

`npm` is a super well-known package system, also known as the core of `Node.JS`. Using Yxess might make you think that `npm` is rendered absolute, but don't worry! Most npm back-end packages still work with Yxess, for example [`axios`](https://www.npmjs.com/package/axios). This way you still have your familiar Node utilities, yet the incredible strength of Yxess' backend.

## A general Yxess project looks like...

`.git`: Git is extremely recommended for almost every programming project. Please use Git or an alternative. Note: Git is _not_ mandatory for Yxess.

`raw`: Raw is the way Yxess finds your Pure CSS & JS files to inject into the static result. This was well-explained in the "What makes Yxess special?" heading.

`src`: The source directory is where your JS files go.

`src/assets`: Store images, GIFs, and other content here, to be accessed throughout any point in your Yxess system.

`src/index.js`: Finally, an actual file! This is the main index file for Yxess. This essentially is binding together all of your other JS files.

`src/backend.js`: This file name & content is completely up to you. This is the file that is about your backend, e.x. sending an API request.

`src/layouts`: The layouts directory is pretty self-explanatory - it stores the JS written, styled componented, light yet powerful layout files.

`src/layouts/components`: This directory houses all of the components needed! Written in Styled Components.

`src/layouts/components/button.co.js`: This is, of course, an example, but most of your components will look like this. This file contains the Styled Component.

`src/layouts/index.lt.js`: This is the index `lt` (layout) file. It's written in some funny React, binding together the pages and setting up the internal routing of the pages.

`src/layouts/mainPage.lt.js`: From now on, it's up to you. This is where the main page layout will be written. This page is mentoned in `index.lt.js`.

`yxess.json`: This is the simple JSON file for configurating your Yxess web app. This file helps with almost every general problem, from dependency management to SEO.

## Why learn all this nonsense?

Because it's the future. Yxess gives you superior control over your design, work and final product. Yxess is written from the top-down to provide ease-of-use, yet extreme capability, to you.

And as they all say...

<img src="https://yxess.github.io/assets/unlimited-power.gif">

## Contribute

So you've decided to stick around, eh? We're always looking for help! Feel free to modify any piece of code here, and then open a PR! As long as you [install from source](#from-source-requires-npm), you can modify the pure Yxess code. Running `npm install` when done will validate that you have a working installation. Once you think your stuff is good enough, [open a PR](https://github.com/yxess/yxess/pulls)! And remember, we're [GNU GPL 3 Licensed](LICENSE).

## Links

- [Github](https://github.com/yxess/)
- [NPM](https://www.npmjs.com/package/yxess)

## And finally...

Thanks for sticking around! If you've read all the way this much, you definitely need to start sing Yxess. [Install Yxess](#installation) right now!

<p align="center"><img src="https://yxess.github.io/assets/logo.png"/></p>
