/*
 *  --------------------------------------------
 *  Sugar Plugin Boilerplate (DELETE THIS BLOCK)
 *  --------------------------------------------
 *
 *  This code defines Sugar plugins that can be consumed in one of
 *  three forms (see https://sugarjs.com/quickstart/ for details):
 *
 *  1. Static
 *  2. Chainable
 *  3. Extended Mode
 *
 *
 *  ------
 *  Naming
 *  ------
 *
 *  Plugins can be named anything, however it is recommended to include "sugar"
 *  in the name to indicate that it is a Sugar plugin, as well as appear in searches.
 *  Additionally, adding the targeted native namespace (String, Array, etc) helps to
 *  give context for when scanning plugin names. This sample is for a one-off single
 *  method plugin, and so uses "sugar-string-sample" as the plugin name. This can be
 *  changed to suit your needs, for example if the plugin is a suite of methods that
 *  belong to different namespaces.
 *
 *
 *  ----------------
 *  Defining Methods
 *  ----------------
 *
 *  There are 5 ways that methods can be defined:
 *
 *  (1) Instance Method
 *
 *     Called through the global with the instance as the first argument:
 *
 *       Sugar.String.sample('foo')
 *
 *
 *     on a chainable prototype:
 *
 *       var str = new Sugar.String('foo');
 *       foo.sample();
 *
 *
 *     or directly on native prototypes in extended mode:
 *
 *       'foo'.sample();
 *
 *
 *  (2) Static Method
 *
 *     Called throughon the global:
 *
 *       Sugar.String.sample();
 *
 *     or directly on the native object in extended mode:
 *
 *       String.sample();
 *
 *
 *  (3) Instance Method With Arguments
 *
 *     Same as (1) but accepts unlimited arguments. Method definition must name at
 *     least two arguments, the first being the instance itself. The last named
 *     argument will be an array of all arguments collected beyond the function's
 *     length.
 *
 *
 *  (4) Static Method With Arguments
 *
 *     Same as (2) but accepts unlimited arguments. Method definition must name at
 *     least one argument. The last named argument will be an array of all arguments
 *     collected beyond the function's length.
 *
 *
 *  (5) Instance and Static Method
 *
 *      Sugar will not modify Object.prototype by default, so methods that would be
 *      defined on Object.prototype (in a perfect world) should use this instead.
 *      It will effectively perform the same as (1), mapping a static method to the
 *      Sugar global, and an instance method to the chainable prototype. However,
 *      in extended mode, as extending Object.prototype will be blocked, it will
 *      additionally map the static form of the method to the Object native object
 *      so that it can be used safely without going through the prototype. This
 *      will effectively make the method callable in the following 3 ways:
 *
 *      Sugar.Object.sample(obj);
 *
 *      var obj = Sugar.Object(obj);
 *      obj.sample();
 *
 *      Object.sample(obj); (Extended Mode)
 *
 *
 *  -----------------
 *  Exporting Methods
 *  -----------------
 *
 *  When creating a single, one-off method, simply export it using:
 *
 *  module.exports = Sugar.String.sample;
 *
 *
 *  When creating a suite of methods, there are two options. Which to choose
 *  depends on how you want your methods to be consumed. The first option
 *  is to define all methods here and export them all with:
 *
 *  module.exports = {
 *    sample1: Sugar.String.sample1,
 *    sample2: Sugar.String.sample2
 *  }
 *
 *  This will result in them being consumed by the same require:
 *
 *  var sample = require('sugar-string-sample');
 *  sample.sample1();
 *  sample.sample2();
 *
 *  Option two is to define them in separate files and create an index.js file
 *  to require them all. This will allow them to be required separately or together:
 *
 *  var sample1 = require('sugar-string-sample/method1');
 *  var sample2 = require('sugar-string-sample/method2');
 *
 *  sample1();
 *  sample2();
 *
 *
 *  var Sugar = require('sugar-string-sample'); (all methods)
 *  Sugar.String.method1();
 *  Sugar.String.method2();
 *
 *
 *  Which option you choose should depend on how your library is structured. If all
 *  methods are related and are designed to be used conjointly, it often makes more
 *  sense to bundle them together into a single package. However, if methods could
 *  be consumed separately, using the second option is a bit more user friendly,
 *  especially if the user is using a package manager like Browserify, as they can
 *  choose to add only individually required methods to their build.
 *
 *  See index.js for an example entry point for this method.
 *
 *  -------
 *  Testing
 *  -------
 *
 *  Default tests are added here written in Mocha. This is just a sample boilerplate
 *  to encourage good testing of plugins, and provide example usage. Any framework
 *  can be substituted here.
 *
 *
 */
(function() {

  var hasExports = typeof module !== 'undefined' && module.exports;

  if (hasExports) {
    Sugar = require('sugar-core');
  }

  // --------- (1) Instance method example ------------

  Sugar.String.defineInstance({

    /***
     * @method sample(<num>, [opt] = 'optional')
     * @returns String
     * @short Example method short description.
     * @extra Example method long description.
     * @example
     *
     *   str.sample(1) -> 'example!'
     *
     ***/
    'sample': function(str, num, opt) {
      // <str> refers to the string instance
      // <num> is a required argument, [opt] is optional
      return num + ' example!';
    }

  });

  // --------- (2) Static method example ------------

  // Sugar.String.defineStatic({

  //   /***
  //    * @method sample(<num>, [opt] = 'optional')
  //    * @static
  //    * @example
  //    *
  //    *   String.sample(1) -> 'example!'
  //    *
  //    ***/
  //   'sample': function(num, opt) {
  //     // <num> is a required argument, [opt] is optional
  //     return num + ' example!';
  //   }

  // });

  // --------- (3) Instance method with unlimited arguments ------------

  // Sugar.String.defineInstanceWithArguments({

  //   /***
  //    * @method sample([args])
  //    * @example
  //    *
  //    *   str.sample('foo', 'bar'); -> 2 args!
  //    *
  //    ***/
  //   'sample': function(str, args) {
  //     // <str> refers to the string instance
  //     // [args] are collected into an array as the 2nd argument
  //     return args.length + ' args!';
  //   }

  // });

  // --------- (4) Static method with unlimited arguments ------------

  // Sugar.String.defineStaticWithArguments({

  //   /***
  //    * @method sample(<num>, [args])
  //    * @static
  //    * @example
  //    *
  //    *   String.sample(2, 'foo', 'bar'); -> 2 args!
  //    *
  //    ***/
  //   'sample': function(num, args) {
  //     // <num> is a required argument
  //     // [args] are collected into an array as the 2nd argument
  //     return args.length + ' args!';
  //   }

  // });

  // --------- (5) Instance and static method ------------

  // Sugar.Object.defineInstanceAndStatic({

  //   /***
  //    * @method sample(<num>, [opt] = 'optional')
  //    * @example
  //    *
  //    *   Object.sample(1) -> 'example!'
  //    *
  //    ***/
  //   'sample': function(str, num) {
  //     // <str> refers to the string instance
  //     // <num> is a required argument, [opt] is optional
  //     return 'example!';
  //   }

  // });

  if (hasExports) {
    module.exports = Sugar.String.sample;
  }

})();
