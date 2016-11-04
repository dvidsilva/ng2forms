# Angular2 Forms Workshop

This repo was created using the [https://github.com/angular/quickstart](https://github.com/angular/quickstart) as a base.
Check the [Angular](https://angular.io/docs/ts/latest/quickstart.html) website for more information about getting started.

**This is not the perfect arrangement for your application. It is not designed for production, 
because it prefers compilation speed over performance. 
It exists primarily to get you started quickly with learning and prototyping in Angular**

## Preparation

Idetally, clone this repo and install the packages and requirements necesary, and verify that it runs properly
before arriving to the workshop. There will be several attendees trying to perform requests
at the same time and it might be much slower to download at the venue.

## Prerequisites

Node.js and npm are essential to Angular development.

<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.

**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

We recommend [nvm](https://github.com/creationix/nvm) for managing multiple versions of node and npm.

## Clone this repo


Clone this repo into a new project folder (e.g., `~/ng2forms`).
```bash
git clone  https://github.com/dvidsilva/ng2forms  ~/ng2forms
cd ~/ng2forms
```

We have no intention of updating the source.
Discard everything "git-like" by deleting the `.git` folder.
```bash
rm -rf .git  # non-Windows
rd .git /S/Q # windows
```

### Create a new git repo
You could [start writing code](#start-development) now and throw it all away when you're done.
If you'd rather preserve your work under source control, consider taking the following steps.

Initialize this project as a *local git repo* and make the first commit:
```bash
git init
git add .
git commit -m "Initial commit"
```

Create a *remote repository* for this project on the service of your choice.

Grab its address (e.g. *`https://github.com/<my-org>/<name>.git`*) and push the *local repo* to the *remote*.
```bash
git remote add origin <repo-address>
git push -u origin master
```

## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```bash
npm install
npm start
```

You can replace `npm install` with yarn if you prefer, a `yarn.lock` file is included.

The `npm start` command first compiles the application,
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.

You're ready to write your application.

### npm scripts

We've captured many of the most useful commands in npm scripts defined in the `package.json`:

* `npm start` - runs the compiler and a server at the same time, both in "watch mode".
* `npm run tsc` - runs the TypeScript compiler once.
* `npm run tsc:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run lite` - runs the [lite-server](https://www.npmjs.com/package/lite-server), a light-weight, static file server, written and maintained by
[John Papa](https://github.com/johnpapa) and
[Christopher Martin](https://github.com/cgmartin)
with excellent support for Angular apps that use routing.

Here are the test related scripts:
* `npm test` - compiles, runs and watches the karma unit tests
* `npm run e2e` - run protractor e2e tests, written in JavaScript (*e2e-spec.js)

## Testing

The QuickStart documentation doesn't discuss testing.
This repo adds both karma/jasmine unit test and protractor end-to-end testing support.

These tools are configured for specific conventions described below.

*It is unwise and rarely possible to run the application, the unit tests, and the e2e tests at the same time.
We recommend that you shut down one before starting another.*

### Unit Tests
TypeScript unit-tests are usually in the `app` folder. Their filenames must end in `.spec`.

Look for the example `app/app.component.spec.ts`.
Add more `.spec.ts` files as you wish; we configured karma to find them.

Run it with `npm test`

That command first compiles the application, then simultaneously re-compiles and runs the karma test-runner.
Both the compiler and the karma watch for (different) file changes.

Shut it down manually with `Ctrl-C`.

Test-runner output appears in the terminal window.
We can update our app and our tests in real-time, keeping a weather eye on the console for broken tests.
Karma is occasionally confused and it is often necessary to shut down its browser or even shut the command down (`Ctrl-C`) and
restart it. No worries; it's pretty quick.

## TypeScript

We will be using [TypeScript](https://www.typescriptlang.org/) for the workshop, and is the preferred
tool when developing Angular2 applications. 

Altough it is very similar to JavaScript and it should be 
easy to get it, we recommend looking at their [getting started guide](https://www.typescriptlang.org/docs/tutorial.html)
before the workshop.

### VsCode

I use [Visual Studio Code](https://code.visualstudio.com/docs/?dv=osx),
because it comes already with TypeScript integrations, code completion, syntax, etc. Is a a very good tool,
but obviously any code editor that you're comfortable with works for this. I'd recommend installing TypeScript
syntax checker plugins for your editor.

### .ts files

The source files that we will be modifying are `.ts`, the folders have some `.js` and `.map` files, those are compiled
from the TypeScript files, avoid making changes there since the watcher will overwrite them and you might lose the changes.

### Using JavaScript instead

It is possible to use Angular2 without TypeScript, but it is not in the scope of this class,
if you'd like to learn more about it, take a look at the guide for
[getting started with Angular2 with JavaScript](https://angular.io/docs/js/latest/quickstart.html).

## What's included

This repo has an example Angular2 application with extra elements not included in the quickstart. It can be
used to acquire familiarity with the concepts of Angular2.

A router is included, with some routes that match to components, and the `<router-outlet>` where it will be displayed.
The routes here are defined in the file `app/app.module.ts`.

For more information about routing, consult the [documentation](https://angular.io/docs/ts/latest/guide/router.html). 

We included the components that we will need for the workshop, most of them will be empty and you will be writing
on those files, except for the `app/home/home.component.ts`, we included some property and event bindings there that
you can use as reference. 

For more information about templates and bindings look at the [documenation](https://angular.io/docs/ts/latest/guide/template-syntax.html).

And, here's a link to the [documentation about forms](https://angular.io/docs/ts/latest/guide/forms.html) in Angular2 for reference.

## Cheatsheet

To facilitate following the workshop we added a [cheat sheet](https://github.com/dvidsilva/ng2forms/blob/master/cheatseet.md) that you
can use as reference if you need to look at after or if you need to copy paste code to make sure it works, or compare what you typed.
