/*@
  @file: src/isdefined.js
  @version: 1.0.0
  @website: http://webman.io/missing.js/isdefined.js
  @author: Mark Topper
  @author-website: http://webman.io
  @function: isDefined
  @param:  name  mixed   the variable to check if defined
  @description: check if a variable of any kind is defined
@*/
function isDefined(name) {
  return typeof name !== 'undefined';
};

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
