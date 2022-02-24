// when user clicks chill button, console log a return quote var
var chillBtn = document.querySelector(".btn-chill");
var stokedBtn = document.querySelector(".btn-stoked");
var stressedBtn = document.querySelector(".btn-stressed");
var heavyBtn = document.querySelector(".btn-heavy");

//local storage arrays
var storedQuotes = JSON.parse(localStorage.getItem("storedQuotes")) || [];

//create a function

function getData(event) {
  console.log(event.target);

  // Return an inspirational quote from the API and log it to the console.
  fetch("https://favqs.com/api/quotes", {
    headers: {
      Authorization: `Token token="64434f7c59af706181286bb959dd3084"`,
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);
      // console.log(data.quotes[0].body);
      // console.log(data.quotes[0].author);
      var quoteData = data.quotes[0].body;
      var quoteAuthor = data.quotes[0].author;
      var userQuotes = {
        quoteData,
        quoteAuthor,
      };
      storedQuotes.push(userQuotes);
      localStorage.setItem("storedQuotes", JSON.stringify(storedQuotes));
      console.log(storedQuotes);
      //BELOW - ready to go code for grabbing quote and author text output
      //   storedQuotes[0].quoteData
      //   storedQuotes[0].quoteAuthor
    });
}

//create an event listener on the chill button.

chillBtn.addEventListener("click", getData);
stokedBtn.addEventListener("click", getData);
stressedBtn.addEventListener("click", getData);
heavyBtn.addEventListener("click", getData);
