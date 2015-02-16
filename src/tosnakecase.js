/*@
  @file: src/tosnakecase.js
  @version: 1.0.0
  @website: http://webman.io/missing.js/tosnakecase.js
  @author: Mark Topper
  @author-website: http://webman.io
  @function: toSnakeCase
  @var:  String  the string to turn into snake case
  @description: convert a string into snake case, like from "helloWorld" to "hello_world"
@*/
String.prototype.toSnakeCase = function(){
	return this.replace(/([A-Z])/g, function($1){return "_"+$1.toLowerCase();});
};
