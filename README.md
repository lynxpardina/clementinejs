# Clementine JS

Exercise of [Clementine JS tutorial for Passport Authentication](http://www.clementinejs.com/tutorials/tutorial-passport.html) using jquery for the front-end instead of JavaScript.

I wanted to reuse code in different parts following the  DRY (Don't Repeat Yourself) principles in jQuery. The way I've found out to do it is creating a plug-in.

The function implemented as plugin is ajax-functions-jquery.js inside app/common and is used by clickController.client-jquery.js and userController.client-jquery.js inside /app/controllers

The missing .env file has the following format:
```
GITHUB_KEY=your github key
GITHUB_SECRET=your secret id
MONGO_URI=mongodb://localhost:27017/clementinejs
PORT=8080
APP_URL=http://127.0.0.1:8080/
```


Hope this is useful to anyone trying to apply DRY in jQuery.

More information on jQuery plugins at [http://learn.jquery.com/plugins/basic-plugin-creation/](http://learn.jquery.com/plugins/basic-plugin-creation/)
