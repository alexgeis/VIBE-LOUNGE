// var historyURL = "./history.html"
// location.replace(historyURL);

//VARIABLE DECLARATIONS
//time variables examples
// var today = moment().format("L"); // MM/DD/YYY
// var oneDayAgo = moment().subtract(1, "days").format("L");
var now = moment().format("ddd, h:mm A");
console.log(now);

//element selectors
var stokedMoodEl = document.querySelector("#buttonOne");
var chillMoodEl = document.querySelector("#buttonTwo");
var stressedMoodEl = document.querySelector("#buttonThree");
var heavyMoodEl = document.querySelector("#buttonFour");
var zenMoodEl = document.querySelector("#buttonZen");

//local storage arrays
var storedLatestMoods = JSON.parse(localStorage.getItem("latestMoods")) || [];
//Below will be used to store monthly chart
// var storedMonthlyMoods = JSON.parse(localStorage.getItem("monthlyMoods")) || [];
//localStorage.removeItem() <- may need to clear out some local storage

//ChartJS info
//last 30 visits chart
function monthChart() {
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

//last 7 visits Chart
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
  const myChart = new Chart(document.getElementById("myChart"), config);
}
latestChart();

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
  //   storedMonthlyMoods.push(userObj);
  // // SET LOCAL STORAGE TO UPDATED DATA (STRINGIFIED)
  localStorage.setItem("latestMoods", JSON.stringify(storedLatestMoods));
  //   localStorage.setItem("monthlyMoods", JSON.stringify(storedMonthlyMoods));
  console.log(storedLatestMoods);
  //   console.log(storedMonthlyMoods);
  latestChart();
  //   monthChart();
}

stokedMoodEl.addEventListener("click", storeMood);
chillMoodEl.addEventListener("click", storeMood);
stressedMoodEl.addEventListener("click", storeMood);
heavyMoodEl.addEventListener("click", storeMood);
zenMoodEl.addEventListener("click", storeMood);
