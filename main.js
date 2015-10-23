var key = "a43949db9a0e7038ef19cc7bec825a63";
var url = "https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=" + key + "&user_id=137127604%40N06&format=json&nojsoncallback=1";
var src;

// Make request to Flikr API
var request = new XMLHttpRequest();
request.open('GET', url, true);
request.send();

// Parse JSON object; display photos and titles
request.onload = function() {
   if (request.status >= 200 && request.status < 400) {
    data = JSON.parse(request.responseText);
    console.log("successfully parsed JSON");
    for (var i=0; i < data.photos.photo.length; i++) {
      item = data.photos.photo[i]
      // Build image src from JSON
      src = "https://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
      // Display photo
      var img = document.createElement("img");
      img.setAttribute("src", src);
      document.getElementById("images").appendChild(img);
      // Display title
      var title = document.createTextNode(item.title + "; ");
      document.getElementById("images").appendChild(title);
    }
   } else {
    console.log("error");
   }
};
