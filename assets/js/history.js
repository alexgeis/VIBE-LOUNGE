// var historyURL = "./history.html"
// location.replace(historyURL);

//VARIABLE DECLARATIONS
var today = moment().format("L"); // MM/DD/YYY
var oneDayAgo = moment().subtract(1, "days").format("L");
var twoDaysAgo = moment().subtract(2, "days").format("L");
var threeDaysAgo = moment().subtract(3, "days").format("L");
var fourDaysAgo = moment().subtract(4, "days").format("L");
var fiveDaysAgo = moment().subtract(5, "days").format("L");
var sixDaysAgo = moment().subtract(6, "days").format("L");
var sevenDaysAgo = moment().subtract(7, "days").format("L");

var dayCount = 0;
/*

*/
// var moodOneDay = moodZeroDay

var moodZeroDay = localStorage.getItem("moodZeroDay");
var moodOneDay = localStorage.getItem("moodOneDay");
var moodTwoDay = localStorage.getItem("moodTwoDay");
var moodThreeDay = localStorage.getItem("moodThreeDay");
var moodFourDay = localStorage.getItem("moodFourDay");
var moodFiveDay = localStorage.getItem("moodFiveDay");
var moodSixDay = localStorage.getItem("moodSixDay");
var moodSevenDay = localStorage.getItem("moodSevenDay");

// var savedMoods = JSON.parse(localStorage.getItem("KEY")) || [];
var savedMoods = [
  moodZeroDay,
  moodOneDay,
  moodTwoDay,
  moodThreeDay,
  moodFourDay,
  moodFiveDay,
  moodSixDay,
  moodSevenDay,
];
// var savedMoods = [
//   moodZeroDay,
//   moodOneDay,
//   moodTwoDay,
//   moodThreeDay,
//   moodFourDay,
//   moodFiveDay,
//   moodSixDay,
//   moodSevenDay,
// ];
/*
for (i=0; i < savedMoods.length;i++){
    data.push()
}
*/

//kitten game help
// var userInits = window.prompt("What are you Initials?");
// // TODO: SAVE USER/SCORE TO LOCALSTORAGE
// var userObj = {
//   KEY 1,
//   KEY 2,
//   Key 3...
// };
// // UPDATE SAVED SCORE DATA (ARRAY)
// savedScores.push(userObj);
// // SET LOCAL STORAGE TO UPDATED DATA (STRINGIFIED)
// localStorage.setItem("KEY", JSON.stringify(savedMoods));

//ChartJS info
function renderChart() {
  const labels = [
    sevenDaysAgo,
    sixDaysAgo,
    fiveDaysAgo,
    fourDaysAgo,
    threeDaysAgo,
    twoDaysAgo,
    oneDayAgo,
    today,
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Your Mood - History",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        //USER MOOD INPUT VALUE WILL FILL THIS DATA ROW
        // data: savedMoods,
        data: [0, 100, -100, 0, 0, 100, 100, -100, -100, 0, 0, -100, -100, 0],
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      parsing: {
        xAxisKey: "Duration",
        yAxisKey: "Mood Level",
      },
    },
  };

  const myChart = new Chart(document.getElementById("myChart"), config);
}
renderChart();

/* PSEUDO
var upMoodEl = document.querySelector("#button1")
var midMoodEl = document.querySelector("#button2")
var downMoodEl = document.querySelector("#button3")

function storeMood(moodInput){
    data.datasets[0].data.push(moodInput)
    data.datasets[0].data.shift()

    // keys - chart x-axis, values - last 7 moodInputs (returns a number)

    //localStorage.setItem("todayMood",moodInput)
    //var todayMood = localStorage.getItem("todayMood")
    
    //localStorage.setItem("todayMood",moodInput)
    //var todayMood = localStorage.getItem("todayMood")
    
    //localStorage.removeItem() <- will need to clear out some local storage

    


    labels.push(moodInput)
    labels.data.shift()

    //locally store city searches
    
  var moodInput = inputEl.value;
  //   ---setting captured values to local storage---
  localStorage.setItem("citySearch", citySearch);
  var citySearchItem = localStorage.getItem("citySearch");
  var cityLi = document.createElement("li");
  cityLi.classList.add("search-list");
  var cityBtn = document.createElement("button");
  //   cityBtn.setAttribute(‘data-city’,‘para-1’);
  cityBtn.classList.add("search-button");

  cityBtn.textContent = citySearchItem;
  cityLi.appendChild(cityBtn);
  searchedList.appendChild(cityLi);
  return moodInput
}

//event delegation
VIBEBUTTON1.addEventListener("click", function(e){
    e.preventDefault();
    if (e.id === "upMood"){
    var moodInput = 100
    localStorage.setItem("moodZeroDay", moodInput)
    } else if (e.id === "downMood"){
    var moodInput = -100
    localStorage.setItem("moodZeroDay", moodInput)
    } else {
    var moodInput = 0
    localStorage.setItem("moodZeroDay", moodInput)
    }
    return moodInput;
}
storeMood(moodInput);
renderChart();
)


*/
