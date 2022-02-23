var imgCar = document.querySelector(".active");
var pictureIndex = 0;
var picture = [
  "https://images.unsplash.com/photo-1643499725626-f239f90340cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
  "https://images.unsplash.com/photo-1643041447984-ff891bdf0815?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1643189446178-dc8dbc187dc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];
//sets the time interval for how often pictures change in the carousel
function setTime() {
  var secondsLeft = 10;
  var timeInterval = setInterval(function () {
    secondsLeft--;
    if (secondsLeft <= 0) {
      clearInterval(timeInterval);
      var imgEl = document.querySelector("img");
      imgEl.remove();
      callImage();
      pictureIndex++;
      if (pictureIndex >= picture.length) {
        pictureIndex = 0;
      }
    }
  }, 1000);
}
//creates and appends images into the carousel uses the picture object to set src
function callImage() {
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", picture[pictureIndex]);
  imgEl.setAttribute("id", "active-image");
  imgEl.classList.add("d-block");
  imgEl.classList.add("w-100");
  imgCar.appendChild(imgEl);
  return setTime();
}
callImage();



//Mike's fetch code    
fetch("https://api.pexels.com/v1/search?query=relax")
	.then(res => res.json())
	.then(result => {
		console.log(result);})
//End of Mike's code