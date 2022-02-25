var imgCar = document.querySelector(".active");
var quoteBox = document.querySelector(".top-right");
var pictureIndex = 0;
//sets the time interval for how often pictures change in the carousel
function setTime() {
  var secondsLeft = 10;
  var timeInterval = setInterval(function () {
    secondsLeft--;
    if (secondsLeft <= 0) {
      clearInterval(timeInterval);
      var imgEl = document.getElementById("active-image");
      imgEl.remove();
      callImage();
      pictureIndex++;
      if (pictureIndex >= 15) {
        pictureIndex = 0;
      }
    }
  }, 1000);
}
//creates and appends images into the carousel uses the picture from the fetch request's json object
function callImage() {
  fetch("https://api.pexels.com/v1/search?query=relax", {
      headers: {
        Authorization: '563492ad6f91700001000001f0fbdce6b8e944fda3b656072a1d4665'
      }
    })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);

      var picture = result.photos[pictureIndex].src.landscape;
      var imgEl = document.createElement("img");
      imgEl.setAttribute("src", picture);
      imgEl.setAttribute("id", "active-image");
      imgEl.classList.add("d-block");
      imgEl.classList.add("w-100");
      imgCar.appendChild(imgEl);
      return setTime();
    });
}

// function callQuote() {
//     fetch()
//     .then((res) => res.jason())
//     .then((results) => [
//         var quote = result...

//     ])

// }

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