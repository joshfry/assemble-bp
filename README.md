# Boilerplate

*Front-end tool for generating static sites with Grunt, Bower, Assemble, Sass, Bourbon, Bourbon Neat.*

This is my personal arsenal of tools and workflows to build things. It's a starting point for new projects and meant to be customized. 

## [Grunt](http://gruntjs.com): Automation

- **Development tasks**
  - Local server @ http://localhost:8000
  - Watch task
  - Livereload (without browser extension)
  - Sass compiling
  - JS concatenation
  - JS hinting
  - [Assemble](http://assemble.io), for static site generation
  - Clean and Copy commands
  - Outputs to `dist/` directory
- **Production tasks**
  - Image compression
  - Concatenate and minify linked files
  - Outputs to `build/` directory

## [Bower](http://bower.io): Package manager

  - **Default packages**
    - [jQuery](http://jquery.com)
    - [Icon Font](http://mfglabs.github.io/mfglabs-iconset)
    - [Bourbon](http://bourbon.io) (Sass mixin library)
    - [Bourbon Neat](http://neat.bourbon.io) (Sass grid framework)

Install new git packages

    $ bower install <git repo> --save
    
`--save` adds the package to `bower.json` so that when `$ bower install` is run, the package will be installed.

## [Assemble](http://assemble.io): Static site generator

- **`src/templates/`**
  - `data/` Separate content from layout
  - `helpers/` Assemble addons
  - `layouts/` Site layouts
  - `pages/` Site pages
  - `partials/` Reusable chunks of code

## Sass: Boilerplate code

- **`src/scss/`**
  - `base/` Choose a CSS reset
    - `base/_reset.scss` Eric Meyer's CSS Reset
    - `base/_normalize.scss` Nicolas Gallagher's Normalize
    - `base/_base.scss` Add baseline styles: font-family, line-height, etc.
  - `components` Meant for reusable components
    - `_containers.scss` Lots of layout helpers
    - `_media-queries.scss` Documentation of sensible mq's + `dev-mode` styles.
      - Set `dev-mode` to true or false in `helpers/_variables.scss`. Displays current media       query in bottom right corner of browser window.
    - `_mobile-menu.scss` A built-in mobile menu
  - `helpers`
    - `_grid-settings.scss` Settings for Bourbon Neat
    - `_mixins.scss` Global Sass mixins
    - `_variables.scss` Global Sass variables
  - `_author.scss` Custom site styles
  - `_style.scss` Imports everything

## JS: Boilerplate code

- **`src/js/`**
  - `lib/`
    - `modernizr-custom.js` Includes only the HTML5 shiv.
    - `prism` Custom syntax highlighting
  - `components/` Write custom js components here. Everything is auto-concatenated and linked in project.
  - `init.js` Loads last, meant for initializing plugins, etc.

---

## Requirements

- [Ruby](https://www.ruby-lang.org/en)
  - [Bundler](http://bundler.io) `$ gem install bundler`
  - [Rake](http://rake.rubyforge.org) `$ gem install rake`
- [Node](http://nodejs.org)
  - [Grunt](http://gruntjs.com) `npm install -g grunt-cli`
  - [Bower](http://bower.io) `npm install -g bower`

## Installation

    $ rake
    
Rake does the following:

- `$ bundle install --path=vendor` Installs Ruby Gems
- `$ npm install` Installs npm modules
- `$ bower install` Installs Bower packages

## Grunt tasks

Development

    $ grunt dev

Production

    $ grunt build

To view the build:

    $ grunt p

---

If you get an error after running `$ grunt dev` that says **EMFILE: too many open files**,

Open `.bashrc` file,

    $ open ~/.bashrc

and add this line:

    ulimit -n 9999

Save and reopen terminal.