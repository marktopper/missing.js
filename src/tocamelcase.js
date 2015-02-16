/*@
  @file: src/tocamelcase.js
  @version: 1.0.0
  @website: http://webman.io/missing.js/tocamelcase.js
  @author: Mark Topper
  @author-website: http://webman.io
  @function: toCamelCase
  @var:  String  the string to turn into camel case
  @description: convert a string into camel case, like from "hello_world" to "helloWorld"
@*/
String.prototype.toCamelCase = function(){
    return this.replace(/(\_[a-z])/g, function($1){return $1.toUpperCase().replace('_','');});
};
