(function() {

  var hasExports = typeof module !== 'undefined' && module.exports;

  if (hasExports) {
    var Sugar = require('sugar-core');
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
