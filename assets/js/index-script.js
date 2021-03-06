// when user clicks chill button, console log a return quote var
var chillBtn = document.querySelector(".btn-chill");
var stokedBtn = document.querySelector(".btn-stoked");
var zenBtn = document.querySelector(".btn-zen");
var stressedBtn = document.querySelector(".btn-stressed");
var heavyBtn = document.querySelector(".btn-heavy");
var clearBtn = document.querySelector("#clearHistory");
// var clearModal = document.querySelector("#clearModal");
//chart variables
var now = moment().format("ddd, h:mm A");
console.log(now);
let myChart;

//time variables examples
// var today = moment().format("L"); // MM/DD/YYY
// var oneDayAgo = moment().subtract(1, "days").format("L");

//local storage arrays
var storedLatestMoods = JSON.parse(localStorage.getItem("latestMoods")) || [];
var storedQuotes = JSON.parse(localStorage.getItem("storedQuotes")) || [];
// var storedMusicSearch =
//   JSON.parse(localStorage.getItem("storedMusicSearch")) || [];
//Below can be used to store monthly chart
// var storedMonthlyMoods = JSON.parse(localStorage.getItem("monthlyMoods")) || [];

function latestChart() {
  const labels = [];

  const up = (ctx, value) =>
    ctx.p0.parsed.y < ctx.p1.parsed.y ? value : undefined;
  const down = (ctx, value) =>
    ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Your Mood - Last 7 Visits",
        //below 2 affect label color box at the top
        // backgroundColor: "rgb(255, 99, 132)",
        // borderColor: "rgb(24, 78, 119)",
        pointBackgroundColor: "rgb(255, 255, 255)",
        fill: true,
        tension: 0.2,
        segment: {
          borderColor: (ctx) =>
            up(ctx, "rgba(153, 217, 140, 1)") ||
            down(ctx, "rgba(24, 78, 119, 1)"),
          backgroundColor: (ctx) =>
            up(ctx, "rgba(153, 217, 140, 1)") ||
            down(ctx, "rgba(24, 78, 119, 1)"),
        },
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
    console.log(moodX);
    if (data.datasets[0].data.length == 8) {
      data.datasets[0].data.shift();
    }
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
      scales: {
        y: {
          //min-max of chart
          title: {
            display: true,
            //LABEL TEXT OF Y AXIS
            text: "Mood Level",
            //FONT OF LABEL
            // font: font-family,
          },
          min: -100,
          max: 100,
        },
        x: {
          title: {
            display: true,
            text: "Time of Visit",
          },
        },
      },
      ticks: {
        // forces step size to be 50 units
        stepSize: 50,
      },
    },
  };
  //   if (myChart instanceof Chart) {
  //     myChart.destroy();
  //   }
  myChart = new Chart(document.getElementById("myChart"), config);
}
latestChart();

//create a function

//fetch quote and store locally
//capture mood input and store locally
function getData(event) {
  console.log(event.target);
  moodInput = event.target.dataset.chart;
  console.log(moodInput);
  var userObj = {
    now,
    moodInput,
  };
  // // UPDATE SAVED MOOD DATA (ARRAY)
  storedLatestMoods.push(userObj);
  // // SET LOCAL STORAGE TO UPDATED DATA (STRINGIFIED)
  localStorage.setItem("latestMoods", JSON.stringify(storedLatestMoods));
  //   localStorage.setItem("monthlyMoods", JSON.stringify(storedMonthlyMoods));
  console.log(storedLatestMoods);

  //YouTube search term input capture
  var moodData = event.target.dataset.mood;
  console.log(event.target.dataset.mood);
  localStorage.setItem("moodData", moodData);
}

function clearRecent(e) {
  e.preventDefault();
  console.log(myChart);
  localStorage.clear();
  myChart.destroy();
  location.reload();
  latestChart();
}

//create an event listener on the chill button.

chillBtn.addEventListener("click", getData);
stokedBtn.addEventListener("click", getData);
zenBtn.addEventListener("click", getData);
stressedBtn.addEventListener("click", getData);
heavyBtn.addEventListener("click", getData);
clearBtn.addEventListener("click", clearRecent);

// monthly chart - starter code
/*
//last 30 visits chart
function monthChart() {
  myChart.destroy();
  const labels = [];

  const up = (ctx, value) =>
    ctx.p0.parsed.y < ctx.p1.parsed.y ? value : undefined;
  const down = (ctx, value) =>
    ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Your Mood - Last 30 Visits",
        //below 2 affect label color box at the top
        // backgroundColor: "rgb(255, 99, 132)",
        // borderColor: "rgb(24, 78, 119)",
        pointBackgroundColor: "rgb(22, 138, 173)",
        fill: true,
        tension: 0.2,
        segment: {
          borderColor: (ctx) =>
            up(ctx, "rgba(75, 192, 192, 1)") ||
            down(ctx, "rgba(255, 26, 104, 1)"),
          backgroundColor: (ctx) =>
            up(ctx, "rgba(75, 192, 192, 1)") ||
            down(ctx, "rgba(255, 26, 104, 1)"),
        },
        //USER MOOD INPUT VALUE WILL FILL THIS DATA ROW
        data: [],
        //   data: storedLatestMoods[0].moodInput,
      },
    ],
  };
  for (let i = 0; i < storedMonthlyMoods.length; i++) {
    const moodX = storedMonthlyMoods[i].moodInput;
    const timeY = storedMonthlyMoods[i].now;

    data.datasets[0].data.push(moodX);
    if (data.datasets[0].data.length == 31) {
      data.datasets[0].data.shift();
    }
    console.log(data.datasets[0].data);
    labels.push(timeY);
    if (labels.length == 31) {
      labels.shift();
    }
  }
  console.log(data.datasets[0].data);
  console.log(labels);
  console.log(storedMonthlyMoods);

  const config = {
    type: "line",
    data: data,
    options: {
      scales: {
        y: {
          //min-max of chart
          title: {
            display: true,
            //LABEL TEXT OF Y AXIS
            text: "Mood Level",
            //FONT OF LABEL
            // font: font-family,
          },
          min: -100,
          max: 100,
        },
        x: {
          title: {
            display: true,
            text: "Time of Visit",
          },
        },
      },
      ticks: {
        // forces step size to be 50 units
        stepSize: 50,
      },
    },
  };
  const chartThirty = new Chart(document.getElementById("chartThirty"), config);
}
// monthChart();
*/
