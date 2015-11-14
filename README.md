# Clementine JS

Exercise of [Clementine JS tutorial for Passport Authentication](http://www.clementinejs.com/tutorials/tutorial-passport.html) using jquery for the front-end instead of JavaScript.

I wanted to reuse code in different parts following the  DRY (Don't Repeat Yourself) principles in jQuery. The way I've found out to do it is creating a plug-in.

The function implemented as plugin is ajax-functions-jquery.js inside app/common and is used by clickController.client-jquery.js and userController.client-jquery.js inside /app/controllers

Hope this is useful to anyone trying apply DRY in jQuery.

More information on jQuery plugins at [http://learn.jquery.com/plugins/basic-plugin-creation/](http://learn.jquery.com/plugins/basic-plugin-creation/)
