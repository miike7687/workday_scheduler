// DEPENDENCIES
var currentDay = document.getElementById("current-day");
var descriptionText = document.querySelector(".description");

$(document).ready(function () {
  console.log("ready!");
});
// Used Moment.JS
const date = moment();
today = moment().format("MMMM Do YYYY, h:mm:ss a");
currentDay.textContent = today;

// TO GET THE CURRENT DATE - find a way to display the day of the week
var todays = new Date();
var dd = String(todays.getDate()).padStart(2, "0");
var mm = String(todays.getMonth() + 1).padStart(2, "0");
//January is 0!
var yyyy = todays.getFullYear();

// TO GET CURRENT TIME - DONE

// gets the current of the user when are on the website
function myHour() {
  var d = new Date();
  var n = d.getHours();
  return parseInt(n);
}
// Save button should save the content/values of both the TIME and the USER INPUT TEXT and store them together as a pair
$(".saveBtn").on("click", function () {
  //get nearby values.
  console.log(this);
  //   Needed to use siblings because the text content appears inside the text-area
  var thingToDo = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  //set items in local storage.
  localStorage.setItem(time, thingToDo);
});

// retrieve all items and display them back in their correct divs on the page
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

console.log(myHour());

var time = [
  00,
  01,
  02,
  03,
  04,
  05,
  06,
  07,
  08,
  09,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
];

var userInputByHour = [
  {
    hour: "",
    task: "",
  },
];

console.log(time);

// Create an each function to run through all the id's and compare the time IDs to the current time
$(".time-block").each(function () {
  console.log(this);
  var timeRow = $(this);
  var now = myHour();
  var time = parseInt(timeRow.attr("id").split("-")[1]);
  console.log(time);
  if (now === time) {
    $(this).addClass("present");
    //if time.key === myHour, then block is red
  }
  if (now > time) {
    $(this).addClass("past");
    //if time.key < myHour, then block is grey
  }
  if (now < time) {
    $(this).addClass("future");
    // if time.key> if time.key < myHour, then block is green
  }
});
