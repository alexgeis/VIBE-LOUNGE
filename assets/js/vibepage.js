var active = document.querySelector(".active");
var imgCarNext = document.querySelector(".carousel-inner");
var quoteBox = document.querySelector("#quote");
var authorBox = document.querySelector("#author");
var searchTerm = localStorage.getItem("moodData");
var tagFiltersArr = [
  {
    stoked: ["Freedom", "Motivational", "Happy"],
    chill: ["Nature", "Proverb", "Idiom"],
    zen: ["Religon", "Wisdom", "Insperational"],
    stressed: ["Anger", "Jealousy", "Risk"],
    heavy: ["Death", "Sarcasm", "Violence", "Fear"],
  },
];
//test
function checkMood() {
  var randomNumber1 = Math.floor(0
    Math.random() * tagFiltersArr[0].stoked.length
  );
  var randomNumber2 = Math.floor(Math.random() * tagFiltersArr[0].chill.length);
  var randomNumber3 = Math.floor(Math.random() * tagFiltersArr[0].zen.length);
  var randomNumber4 = Math.floor(
    Math.random() * tagFiltersArr[0].stressed.length
  );
  var randomNumber5 = Math.floor(Math.random() * tagFiltersArr[0].heavy.length);

  if (searchTerm == "stoked") {
    var tagFilter = tagFiltersArr[0].stoked[randomNumber1];
  } else if (searchTerm == "chill") {
    var tagFilter = tagFiltersArr[0].chill[randomNumber2];
  } else if (searchTerm == "zen") {
    var tagFilter = tagFiltersArr[0].zen[randomNumber3];
  } else if (searchTerm == "stressed") {
    var tagFilter = tagFiltersArr[0].stressed[randomNumber4];
  } else if (searchTerm == "heavy") {
    var tagFilter = tagFiltersArr[0].heavy[randomNumber5];
  }
  console.log(tagFilter);
  //returns an object that shows the api's list of quotes tags
  function getQuoteType() {
    fetch("https://favqs.com/api/typeahead", {
      headers: {
        Authorization: `Token token="64434f7c59af706181286bb959dd3084"`,
      },
    })
      .then(function (response) {
        return response.json();
        console.log(response);
      })
      .then(function (data) {
        console.log(data);
        console.log(data.tags);
      });
  }
  getQuoteType();

  //calls a specific quote
  function callQuote() {
    // Return an inspirational quote from the API and log it to the console.
    var searchCall =
      "https://favqs.com/api/quotes/?filter=" + tagFilter + "&type=tag";
    console.log(searchCall);
    fetch(searchCall, {
      headers: {
        Authorization: `Token token="64434f7c59af706181286bb959dd3084"`,
      },
    })
      .then(function (response) {
        console.log(response.status);
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        console.log(data.quotes[0].body);
        console.log(data.quotes[0].author);
        quoteBox.textContent = data.quotes[0].body;
        authorBox.textContent = data.quotes[0].author;
      });
  }
  callQuote();
}
checkMood();
//creates and appends images into the carousel uses the picture from the fetch request's json object
function callImage() {
  fetch("https://api.pexels.com/v1/search?query=" + searchTerm, {
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

// Music Stuff
// if to limit number of API calls

if (localStorage.getItem(searchTerm) == null) {
  playlistSearch(searchTerm);
} else {
  playVideo();
}

function playlistSearch(searchList) {
  fetch(
    "https://www.googleapis.com/youtube/v3/search?q=" +
      searchList +
      "&type=playlist&key=AIzaSyDUp2REGCjhEYJVGi5TmJJwnQVkP9N0tuU",
    {
      method: "GET",
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      var index1 = Math.floor(Math.random() * 5);
      var randomPlaylist = data.items[index1];
      var playlistId = randomPlaylist.id.playlistId;
      playlistData(playlistId);
      // Put the object into storage
      localStorage.setItem("playlist", JSON.stringify(data));

      // Retrieve the object from storage
    })

    .catch((err) => console.error(err));
}

function playlistData(playlistId) {
  fetch(
    "https://www.googleapis.com/youtube/v3/playlists?key=AIzaSyDUp2REGCjhEYJVGi5TmJJwnQVkP9N0tuU" +
      "&id=" +
      playlistId +
      "&part=player",
    {
      method: "GET",
    }
  )
    .then((res) => {
      //  console.log(res);
      return res.json();
    })
    .then((data) => {
      localStorage.setItem(searchTerm, JSON.stringify(data));
      playVideo();
    })

    .catch((err) => console.error(err));
}

function playVideo() {
  var json = localStorage.getItem(searchTerm);
  var obj = JSON.parse(json);

  var embedURL = obj["items"]["0"]["player"]["embedHtml"];
  console.log(embedURL);
  let div = document.createElement("div");
  div.className = "alert";
  div.innerHTML = obj["items"]["0"]["player"]["embedHtml"];
  document.body.append(div);
}
