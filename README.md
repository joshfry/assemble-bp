# Boilerplate

A front-end tool for generating static sites with [Grunt](http://gruntjs.com/), [Assemble](http://assemble.io/), [Bower](http://bower.io/), [Sass](http://sass-lang.com/), [Bourbon](http://bourbon.io/), [Bourbon Neat](http://neat.bourbon.io/) and Bourbon [Bitters](http://bitters.bourbon.io/).

> This is my personal starting point for new projects... totally meant to be customized.

#### Requirements

- [Ruby](https://www.ruby-lang.org/en) - Install with [rbenv](https://github.com/sstephenson/rbenv)
    - [Rake](http://rake.rubyforge.org) `gem install rake`
- [Node](http://nodejs.org)

#### Setup

    $ rake setup

- Installs Grunt CLI
- Installs Bower CLI
    
#### Install

    $ rake install

- Installs Ruby Gems to `/vendor/ruby`
- Installs Bower packages to `/vendor/bower`
- Installs npm modules to `/node_modules`

## Grunt commands

#### Development

    $ grunt dev

- Creates web server at [http://localhost:8000](http://localhost:8000)
- Livereloads browser on save
- Static site generator via [assemble](http://assemble.io)

#### Production

    $ grunt build

To view production build:

    $ grunt p

> If you get an error after running `$ grunt dev` that says **EMFILE: too many open files**,  
add `ulimit -n 9999` to your `.bash_profile`.

---

## What's goin' on here?

### [Grunt](http://gruntjs.com): Automation

#### Development tasks

- Local server @ http://localhost:8000
- Watch task
- Livereload (without browser extension)
- Sass compiling
- JS concatenation
- JS hinting
- [Assemble](http://assemble.io), for static site generation
- Clean and Copy commands
- Outputs to `dist/` directory

#### Production tasks

- Image compression
- Concatenate and minify linked files
- Outputs to `build/` directory

### [Bower](http://bower.io): Package manager

#### Default packages

- [jQuery](http://jquery.com)
- [mfglabs icon font](http://mfglabs.github.io/mfglabs-iconset)
- [Bourbon](http://bourbon.io) (Sass mixin library)
- [Bourbon Neat](http://neat.bourbon.io) (Sass grid framework)

Install new packages

    $ bower install <git repo> --save
    
> `--save` adds the package to `bower.json` so that when `$ bower install` is run, the package will be installed.

### [Assemble](http://assemble.io): Static site generator

    /src/templates/
    ├── data
    │   ├── components.json
    │   └── site.yml
    ├── helpers
    │   ├── condense.js
    │   └── prettify.js
    ├── layouts
    │   ├── base.hbs
    │   ├── blank.hbs
    │   └── default.hbs
    ├── pages
    │   ├── index.hbs
    │   └── test.hbs
    └── partials
        ├── dev.hbs
        ├── footer.hbs
        ├── head.hbs
        ├── header.hbs
        ├── nav.hbs
        ├── page-header.hbs
        └── scripts.hbs

### Sass: Boilerplate code

I incorporated [http://bitters.bourbon.io](http://bitters.bourbon.io/)

    ├── base
    │   ├── _base.scss
    │   ├── _flashes.scss
    │   ├── _forms.scss
    │   ├── _lists.scss
    │   ├── _normalize.scss
    │   ├── _tables.scss
    │   └── _typography.scss
    ├── components
    │   ├── _code.scss
    │   └── _container.scss
    ├── helpers
    │   ├── _dev.scss
    │   ├── _grid-settings.scss
    │   ├── _mixins.scss
    │   └── _variables.scss
    ├── site
    │   ├── _author.scss
    │   ├── _footer.scss
    │   └── _site-nav.scss
    └── style.scss

> Check out `scss/helpers/_variables.scss` for design helpers:

    $show_media_queries : true;
    $show_baseline_grid : true;

### JS: Boilerplate code

    /src/js/
    ├── components
    │   └── mobile-menu.js
    ├── init.js
    └── libs
        ├── modernizr-custom.js
        └── prism
            ├── prism.css
            └── prism.js
