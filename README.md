# missing.js

missing.js is a library for JavaScript with some missing JavaScript functions.  
Website: http://webman.io/missing.js    
Version: 0.0.1    

# Usage

### isDefined
check if a variable of any kind is defined
```
if (isDefined(someVar))
{
  // "someVar" is defined
}
else
{
  // "someVar" is undefined
}
```

### toCamelCase
convert a string into camel case, like from "hello_world" to "helloWorld"
```
"hello_world".toCamelCase(); // returns "helloWorld"
```

### toSnakeCase
convert a string into snake case, like from "helloWorld" to "hello_world"
```
"helloWorld".toSnakeCase(); // returns "hello_world"
```

# Contrubution

All new js files should follow [our code standards](http://webman.io/missing.js/code-standards) due to our usage of [comment reader](https://github.com/marktopper/comments-reader) to create the help documents.

All contributions are more than welcome.
