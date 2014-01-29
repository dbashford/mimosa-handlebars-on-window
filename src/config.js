"use strict";

exports.defaults = function() {
  return {
    handlebarsOnWindow: {
      libName: 'handlebars.js',
      replace: "__exports__ = Handlebars"
    }
  };
};

exports.placeholder = function() {
  return "\t\n\n"+
         "  # handlebarsOnWindow:\n" +
         "    # libName: 'handlebars.js'             # file name of handlebars library\n" +
         "    # replace: '__exports__ = Handlebars'  # code to prepend 'window.Handlebars = ' to\n";
};

exports.validate = function(config, validators) {
  var errors = [];

  if ( validators.ifExistsIsObject( errors, "handlebarsOnWindow config", config.handlebarsOnWindow ) ) {
    validators.ifExistsIsString( errors, "handlebarsOnWindow.libName", config.handlebarsOnWindow.libName );
    validators.ifExistsIsString( errors, "handlebarsOnWindow.replace", config.handlebarsOnWindow.replace );
  }

  return errors;
};
