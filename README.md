# Sugar Plugin Boilerplate

This repo provides boilerplate code to write your own Sugar plugin.
Notes are provided in sugar-string-sample.js Replace this file with
a readme for your plugin!


## Usage

Sugar plugins that can be consumed in one of three forms (see
[Getting Started](https://sugarjs.com/quickstart/) for details):

1. Static
2. Chainable
3. Extended Mode


## Naming

Plugins can be named anything, however it is recommended to include "sugar"
in the name to indicate that it is a Sugar plugin, as well as appear in searches.
Additionally, adding the targeted native namespace (String, Array, etc) helps to
give context for when scanning plugin names. This sample is for a one-off single
method plugin, and so uses "sugar-string-sample" as the plugin name. This can be
changed to suit your needs, for example if the plugin is a suite of methods that
belong to different namespaces.


## Defining Methods

There are 5 ways that methods can be defined. These methods can be referenced
in the docs [here](https://sugarjs.com/docs/#/Sugar).

### Instance Methods

Called through the global with the instance as the first argument,

    Sugar.String.sample('foo')

on a chainable prototype,

    var str = new Sugar.String('foo');
    foo.sample();


or directly on native prototypes in extended mode.

 'foo'.sample();

Note that Object instance methods require special handling (see below).


### Static Methods

Called through the global,

    Sugar.String.sample();

or directly on the native object in extended mode.

    String.sample();


### Instance Methods With Arguments

Same as instance methods but accept unlimited arguments. Method definition must
name at least two arguments, the first being the instance itself. The last named
argument will be an array of all arguments collected beyond the function's
length.


### Static Methods With Arguments

Same as static methods but accepts unlimited arguments. Method definition must
name at least one argument. The last named argument will be an array of all
arguments collected beyond the function's length.


### Object Instance Methods

Sugar will not modify `Object.prototype` by default, so methods that would be
defined on Object.prototype (in a perfect world) should use the method
`defineInstanceAndStatic` instead. This method will behave in the same manner
as `Instance Methods`, however in extended mode the static forms will be mapped
to the `Object` global so that they can be safely used without going through
`Object.prototype`. This will effectively make the method callable in the
following 3 ways:

    Sugar.Object.sample(obj);

    var obj = Sugar.Object(obj);
    obj.sample();

    Object.sample(obj); // Extended Mode


## Exporting Methods

When creating a single, one-off method, simply export it using:

    module.exports = Sugar.String.sample;

When creating a suite of methods, there are two options. Which to choose
depends on how you want your methods to be consumed. The first option
is to define all methods here and export them all with:

    module.exports = {
      sample1: Sugar.String.sample1,
      sample2: Sugar.String.sample2
    }

This will result in them being consumed by the same require:

    var sample = require('sugar-string-sample');
    sample.sample1();
    sample.sample2();

Option two is to define them in separate files and create an index.js file
to require them all. This will allow them to be required separately or together:

    var sample1 = require('sugar-string-sample/method1');
    var sample2 = require('sugar-string-sample/method2');

    sample1();
    sample2();


    var Sugar = require('sugar-string-sample'); (all methods)
    Sugar.String.method1();
    Sugar.String.method2();


Which option you choose should depend on how your library is structured. If all
methods are related and are designed to be used conjointly, it often makes more
sense to bundle them together into a single package. However, if methods could
be consumed separately, using the second option is a bit more user friendly,
especially if the user is using a package manager like Browserify, as they can
choose to add only individually required methods to their build.

See index.js for an example entry point for this method.


## Testing

Default tests are added here written in Mocha. This is just a sample boilerplate
to encourage good testing of plugins, and provide example usage. Any framework
can be substituted here.
