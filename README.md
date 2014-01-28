mimosa-handlebars-on-window
===========

## Overview

This module will modify `handlebars.js` and add a line of code that attaches `Handlebars` to the `window`.

### Why?

When requirejs/r.js is used to optimize and minify Ember projects (Ember 1.3), Ember has issues finding Handlebars.  I found that updating the `handlebars.js` file in place and attaching `Handlebars` to the `window` solves that problem.

### Why not just update the code?

If you are using Bower to manage project dependencies, then updating those dependencies is a bad idea because they will just get overwritten.  So this module does its work after Bower has pulled in dependencies.

For more information regarding Mimosa, see http://mimosa.io

## Usage

Add `'handlebars-on-window'` to your list of modules.  That's all!  Mimosa will install the module for you when you start `mimosa watch` or `mimosa build`.

## Functionality

This module will detect the `handlebars.js` file and update the code slightly to attach `Handlebars` to `window`. It will detect if it is already attached to the window before updating the code.  If it is already attached to window, this module may be unnecessary, so this module will write to the console when it finds it has no work to do with the `handlebars.js` file.

## Default Config

```javascript
handlebarsOnWindow: {
  libName: "handlebars.js",
  replace: "__exports__ = Handlebars"
}
```

* `libName`: The name of your handlebars file.
* `replace`: The string to prepend `window.Handlebars =` to in `libName`