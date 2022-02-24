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
  fetch("https://api.pexels.com/v1/search?query=relax")
    .then((res) => res.json())
    .then((result) => {
      // console.log(result);
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

//Mike's fetch code
// fetch("https://api.pexels.com/v1/search?query=relax")
//   .then((res) => res.json())
//   .then((result) => {
//     console.log(result);
//     console.log(result.photos[pictureIndex].url)

//   });
//End of Mike's code
