// jQuery version.   Needchanges in script section in index.html and profile.html to include it

// This is a plugin for jQuery. It should be included in the html after the jQuery.js and before the main code.

// IIFE - Immediately Invoked Function Expression to keep variables isolated from dom
// uses the form:
//     (function ($){
//       $.fn.myFunctionName = function(params) {
//           my code
//       };
//     }( jQuery ));
//
// then it's called (in this case) as $(document).apiRequest("GET", apiUrl, callbackFunction)

(function ($){
  $.fn.apiRequest = function(method, query, callback) {

    $.ajax({
        url: query,
        error: function(err) {
          console.log("Error: ",err);
        },
        success: callback,
        type: method
    });

  };
}(jQuery));
