var imgCar = document.querySelector(".active");
var quoteBox = document.querySelector(".quote");


function callImages() {
  //Fetches images from Pexels
  fetch("https://api.pexels.com/v1/search?query=nightlife", {
    headers: {
      Authorization: "563492ad6f91700001000001f0fbdce6b8e944fda3b656072a1d4665",
    },
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);

      //Dynamically creates image carousel
      var picIndex = 0;
      var picture = result.photos[picIndex].src.landscape;
      var imgEl = document.createElement("img");
      imgEl.setAttribute("src", picture);
      imgEl.setAttribute("id", "active-image");
      imgEl.classList.add("d-block");
      imgEl.classList.add("w-100");
      imgCar.appendChild(imgEl);

      //goes to next image in array
      function changeImage() {
        picIndex++;
        if (picIndex == result.photos.length) picIndex = 0;
        var imgEl = document.getElementById("active-image");
        //still having trouble with these 2 lines vvvvv
        imgEl.remove();
        imageEl.src = picture;
      }

      //Timer for changing images at an interval
      setInterval(function () {
        changeImage();
      }, 8000);
    });
}
callImages();

// function callQuote() {
//     fetch()
//     .then((res) => res.jason())
//     .then((results) => [
//         var quote = result...

//     ])

// }

$(document).ready(function () {
  var key = [AIzaSyABQ8JoEM8APRG7n5Kp5Wjw7P8 - DKHMclU];
  var playlistId = "lexCOB9axWA&t=116s";
  var URL = "https://www.googleapis.com/youtube/v3/playlistItems";

  var options = {
    part: "snippet",
    key: key,
    maxResults: 20,
    playlistId: playlistId,
  };

  loadVids();

  function loadVids() {
    $.getJSON(URL, options, function (data) {
      var id = data.items[0].snippet.resourceId.videoId;
      mainVid(id);
      resultsLoop(data);
      console.log(data);
    });
  }

  function mainVid(id) {
    $("#video").html(`
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

      $("main").append(`
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
  $("main").on("click", "article", function () {
    var id = $(this).attr("data-key");
    mainVid(id);
  });
});
