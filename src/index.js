"use strict";

var path = require( "path" )
  , config = require( "./config" )
  , hasHandlebars = /window\.Handlebars/;

var _attach = function ( mimosaConfig, options, next ) {
  if ( options.files && options.files.length ) {
    options.files.forEach( function( file ) {
      // is right file
      if ( path.basename( file.inputFileName ) === mimosaConfig.handlebarsOnWindow.libName ) {
        // does it have handlebars on window already?
        if ( hasHandlebars.test( file.outputFileText ) ) {
          mimosaConfig.log.info( "mimosa-handlebars-on-window detected that window.Handlebars already exists in [[ " +  mimosaConfig.handlebarsOnWindow.libName + " ]], you may not need this module any longer" );
        } else {
          file.outputFileText = file.outputFileText.replace(
            mimosaConfig.handlebarsOnWindow.replace,
            "window.Handlebars = " + mimosaConfig.handlebarsOnWindow.replace );
        }
      }
    });
  }
  next();
};

var registration = function (mc, register) {
  register( ["add","update","buildFile"], "afterCompile", _attach, mc.extensions.javascript );
};

module.exports = {
  registration: registration,
  defaults: config.defaults,
  placeholder: config.placeholder,
  validate: config.validate
};
