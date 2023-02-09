"use strict";
let barChartContainer = document.querySelector("#bar_chart_animation");

const barChart = [];

window.addEventListener("DOMContentLoaded", initLoop())

function initLoop() {
  arrayOfCustomersLoop();

}

// VIEW
function showBar() {
  //clear all content so that the new bars with old measured bars can show, so you replace the whole array once.
  //and not getting a new array shown each time the loop runs
   barChartContainer.innerHTML = "";
  for (let i = 0; i < 40; i++) {0
    const barMeasurement = document.createElement("div");
    barMeasurement.classList.add("bar_measurement");
    barChartContainer.appendChild(barMeasurement);
  
    // get index value as new queueSize, can just call barChart[i], cause of global scope
    barMeasurement.style.height = `${barChart[i]}px`;
    barMeasurement.style.width = `45px`;

    //color styling
    if (`${barChart[i]}` <= 10){
    barMeasurement.style.backgroundColor = "red";}
    else if (`${barChart[i]}` > 10 && `${barChart[i]}` <= 25){
      barMeasurement.style.backgroundColor = "blue";}
   
  }
 
}

//MODEL, alt data -
function arrayOfCustomersLoop() {

  //with random values
  const queueSize = getNumberOfCustomers();

if (barChart.length < 40) {
  //if array is not filled with 40 items, add to end of array
  barChart.push(queueSize);

  console.log(barChart);
   showBar();
  
   setTimeout(arrayOfCustomersLoop, 1000);
}
 else {
  // if filled, push new queueSize value to end of array and shift everything one to the left. so that you shift out first item.
  barChart.shift();
   barChart.push(queueSize);
 
  console.log(barChart);
  showBar()
   setTimeout(arrayOfCustomersLoop, 1000);
}
}

//CONTROLLER
//function from brief, to get number of Customers, acts as our queue data
function getNumberOfCustomers() {
  //FAKE data, gives a compeletely random int between 0 to 32
  return Math.floor(Math.random() * 32);
}
