var imgCar = document.querySelector(".active");
var quoteBox = document.querySelector(".quote");
var authorBox = document.querySelector(".author");

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




$(document).ready(function () {

  var key = [AIzaSyABQ8JoEM8APRG7n5Kp5Wjw7P8 - DKHMclU];
  var playlistId = 'lexCOB9axWA&t=116s';
  var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';


  var options = {
    part: 'snippet',
    key: key,
    maxResults: 20,
    playlistId: playlistId
  };

  loadVids();

  function loadVids() {
    $.getJSON(URL, options, function (data) {
      var id = data.items[0].snippet.resourceId.videoId;
      mainVid(id);
      resultsLoop(data);
      console.log(data)
    });
  }

  function mainVid(id) {
    $('#video').html(`
          << iframe id = "ytplayer"
          type = "text/html"
          width = "150"
          height = "84.375"
          src = "https://www.youtube.com/embed/lexCOB9axWA?playlist=&version=3&autoplay=1&color=white"
          frameborder = "0"
          allowfullscreen >>
        `);
  }


  function resultsLoop(data) {

    $.each(data.items, function (i, item) {

      var thumb = item.snippet.thumbnails.medium.url;
      var title = item.snippet.title;
      var desc = item.snippet.description.substring(0, 100);
      var vid = item.snippet.resourceId.videoId;


      $('main').append(`
              <article class="item" data-key="${vid}">

              <img src="${thumb}" alt="" class="thumb">
                <div class="details">
                  <h4>${title}</h4>
                  <p>${desc}</p>
                </div>

              </article>
            `);
    });
  }

  // CLICK EVENT
  $('main').on('click', 'article', function () {
    var id = $(this).attr('data-key');
    mainVid(id);
  });


});