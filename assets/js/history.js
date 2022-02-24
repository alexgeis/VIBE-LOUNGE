// var historyURL = "./history.html"
// location.replace(historyURL);

//VARIABLE DECLARATIONS
//time variables
// var today = moment().format("L"); // MM/DD/YYY
// var oneDayAgo = moment().subtract(1, "days").format("L");
// var twoDaysAgo = moment().subtract(2, "days").format("L");
// var threeDaysAgo = moment().subtract(3, "days").format("L");
// var fourDaysAgo = moment().subtract(4, "days").format("L");
// var fiveDaysAgo = moment().subtract(5, "days").format("L");
// var sixDaysAgo = moment().subtract(6, "days").format("L");
// var sevenDaysAgo = moment().subtract(7, "days").format("L");
var now = moment().format("ddd, h:mm A");
console.log(now);
//element selectors
var upMoodEl = document.querySelector("#buttonOne");
var midMoodEl = document.querySelector("#buttonTwo");
var downMoodEl = document.querySelector("#buttonThree");
//local storage arrays
var storedLatestMoods = JSON.parse(localStorage.getItem("latestMoods")) || [];
//Below will be used to store monthly chart
//var storedMonthlyMoods = JSON.parse(localStorage.getItem("monthlyMoods")) || [];
//localStorage.removeItem() <- may need to clear out some local storage

//ChartJS info
function monthChart() {
  const labels = [];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Your Mood - History",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        //USER MOOD INPUT VALUE WILL FILL THIS DATA ROW
        data: [],
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
      scales: {
        y: {
          //min-max of chart
          min: -100,
          max: 100,
        },
        //   ticks: {
        //     // forces step size to be 50 units
        //     stepSize: 50,
        //   },
      },
    },
  };
  const myChart = new Chart(document.getElementById("myChart"), config);
}
// monthChart();

function latestChart() {
  const labels = [];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Your Mood - Last 10 visits",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        //USER MOOD INPUT VALUE WILL FILL THIS DATA ROW
        data: [],
        //   data: storedLatestMoods[0].moodInput,
      },
    ],
  };
  for (let i = 0; i < storedLatestMoods.length; i++) {
    const moodX = storedLatestMoods[i].moodInput;
    const timeY = storedLatestMoods[i].now;

    data.datasets[0].data.push(moodX);
    if (data.datasets[0].data.length == 8) {
      data.datasets[0].data.shift();
    }
    console.log(data.datasets[0].data);
    labels.push(timeY);
    if (labels.length == 8) {
      labels.shift();
    }
  }
  console.log(data.datasets[0].data);
  console.log(labels);
  console.log(storedLatestMoods);

  const config = {
    type: "line",
    data: data,
    options: {
      parsing: {
        xAxisKey: "Duration",
        yAxisKey: "Mood Level",
      },
      scales: {
        y: {
          //min-max of chart
          min: -100,
          max: 100,
        },
        //   ticks: {
        //     // forces step size to be 50 units
        //     stepSize: 50,
        //   },
      },
    },
  };
  const myChart = new Chart(document.getElementById("myChart"), config);
}
latestChart();

//

function storeMood(e) {
  e.preventDefault();
  //   console.log(e);
  //   console.log(e.target.dataset.mood);
  moodInput = e.target.dataset.mood;

  var userObj = {
    now,
    moodInput,
  };
  // // UPDATE SAVED MOOD DATA (ARRAY)
  storedLatestMoods.push(userObj);
  // // SET LOCAL STORAGE TO UPDATED DATA (STRINGIFIED)
  localStorage.setItem("latestMoods", JSON.stringify(storedLatestMoods));
  console.log(storedLatestMoods);
}

upMoodEl.addEventListener("click", storeMood);
midMoodEl.addEventListener("click", storeMood);
downMoodEl.addEventListener("click", storeMood);
