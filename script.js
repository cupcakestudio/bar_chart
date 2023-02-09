"use strict";
let barChartContainer = document.querySelector("#bar_chart_animation");

let barDesign; //styled bar
const barChart = [
  1, 10, 17, 27, 19, 32, 11, 24, 16, 33, 8, 29, 40, 30, 37, 9, 15, 18, 7, 14,
  23, 39, 20, 22, 36, 5, 25, 38, 12, 26, 31, 6, 3, 34, 13, 28, 4, 35, 2, 21,
];

//'counter'
function initLoop() {
  arrayOFCustomersLoop();
  const j = queueSize;
}
// showBar();

// view
function showBar() {
  for (let i = 0; i < 20; i++) {
    const barMeasurement = document.createElement("div");
    barMeasurement.classList.add("bar_measurement");
    barChartContainer.appendChild(barMeasurement);
    // const queueSize = getNumberOfCustomers();
    // get index value as new queueSize
    barMeasurement.style.height = `${i * 2}px`;
    barMeasurement.style.width = `45px`;
    setTimeout(1000);
    // barMeasurement.style.transform = `translate(45px)`;
  }
  // // barDesign = barMeasurement.;
  // barChartContainer.innerHTML +=
  //   "<div </div>";
  //   barChart
  // barChartContainer.appendChild(barMeasurement);
}
showBar();
//Model, alt data -
function arrayOFCustomersLoop() {
  // with fixed array value
  let i = 0;
  const queueSize = barChart[i];
  i++;
  barChart.push(queueSize);
  barChart.shift();

  console.log(barChart);
  // setTimeout(arrayOFCustomersLoop, 2000);
  // showBar(barChart);
  //with random values
  // const queueSize = getNumberOfCustomers();

  // barChart.shift();
  // barChart.push(queueSize);

  // console.log(barChart);
  // setTimeout(arrayOFCustomersLoop, 2000);
}

//Controller
//function from brief, to get number of Customers, acts as our queue data
function getNumberOfCustomers() {
  //FAKE data, gives a compeletely random int between 0 to 32
  return Math.floor(Math.random() * 32);
}
