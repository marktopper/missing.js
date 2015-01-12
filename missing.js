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
