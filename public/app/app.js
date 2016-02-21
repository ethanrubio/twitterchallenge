$(function(){

  var searchView = new SearchView();

  // thank you to internet for this function to clear regex url
  Handlebars.registerHelper('format', function (string) {

    if (string) {

      string = string.replace(/[@]+[A-Za-z0-9-_]+/g, function(user) {
           var username = user.replace("@","");
           return user.link("https://twitter.com/"+username);
      });

     return new Handlebars.SafeString(string);

    } else {

      return string;

    }

  });

});
