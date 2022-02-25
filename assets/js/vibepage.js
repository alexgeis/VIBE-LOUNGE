var active = document.querySelector(".active");
var imgCarNext = document.querySelector(".carousel-inner");
var quoteBox = document.querySelector(".quote");
var authorBox = document.querySelector(".author");

//creates and appends images into the carousel uses the picture from the fetch request's json object
function callImage() {
  fetch("https://api.pexels.com/v1/search?query=relax", {
      headers: {
        Authorization: "563492ad6f91700001000001f0fbdce6b8e944fda3b656072a1d4665",
      },
    })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);

      //Dynamically creates image carousel
      var picIndex = 0;

      for (var i = 0; i < result.photos.length; i++) {
        var picture = result.photos[i].src.landscape;
        var imgEl = document.createElement("img");
        imgEl.setAttribute("src", picture);
        imgEl.classList.add("d-block");
        imgEl.classList.add("w-100");
        imgCarNext.children[i].appendChild(imgEl);
        var quoteEl = document.createElement("div");
        quoteEl.classList.add("top-right");
        quoteEl.classList.add("quote");
        var authorEl = document.createElement("div");
        authorEl.classList.add("top-right");
        authorEl.classList.add("author");
        quoteEl.textContent = "Hellow World";
        authorEl.textContent = "~The great and powerful Rick";
        imgCarNext.children[i].appendChild(quoteEl);
        imgCarNext.children[i].appendChild(authorEl);
      }

      //goes to next image in array
      function changeImage() {
        picIndex++;
      }

      //Timer for changing images at an interval
      setInterval(function () {
        changeImage();
      }, 90000);
    });
}
callImage();

playlistSearch("chill")

function playlistSearch(searchList) {
  fetch(
      "https://www.googleapis.com/youtube/v3/search?q=" + searchList + "&type=playlist&key=AIzaSyDUp2REGCjhEYJVGi5TmJJwnQVkP9N0tuU", {
        method: "GET",
      }
    )
    .then((res) => {

      return res.json();
    })
    .then((data) => {
      var index1 = Math.floor(Math.random() * 5)
      var randomPlaylist = data.items[index1]
      var playlistId = randomPlaylist.id.playlis

      playlistData(playlistId)









    })

    .catch((err) => console.error(err));


}

function playlistData(playlistId) {
  fetch(
      "https://www.googleapis.com/youtube/v3/playlists?key=AIzaSyDUp2REGCjhEYJVGi5TmJJwnQVkP9N0tuU&id=" + playlistId + "&part=player", {
        method: "GET",
      }
    )
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => console.log(data))







    .catch((err) => console.error(err));




}