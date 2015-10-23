var key = "a43949db9a0e7038ef19cc7bec825a63";
var url = "https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=" + key + "&user_id=137127604%40N06&format=json&nojsoncallback=1";
var src;

var request = new XMLHttpRequest();
request.open('GET', url, true);
request.send();

request.onload = function() {
   if (request.status >= 200 && request.status < 400) {
    data = JSON.parse(request.responseText);
    console.log("successfully parsed JSON");
    for (var i=0; i < data.photos.photo.length; i++) {
      console.log(data.photos.photo[i].id);
    }
   } else {
    console.log("error");
   }
};

// $.getJSON(url, function(data) {})

// .done(function(data) {
//   $.each(data.photos.photo, function(i,item){
//     src = "https://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
//     $("<img/>").attr("src", src).appendTo("#images");
//     var title = document.createTextNode(item.title + "; ");
//     document.getElementById("images").appendChild(title);
//   });
// });
