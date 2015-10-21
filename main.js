var key = "a43949db9a0e7038ef19cc7bec825a63";
var url = "https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=" + key + "&user_id=137127604%40N06&format=json&nojsoncallback=1";
var src;

$.getJSON(url, function(data){
  $.each(data.photos.photo, function(i,item){
    src = "https://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
     $("<img/>").attr("src", src).appendTo("#images");
  });
});