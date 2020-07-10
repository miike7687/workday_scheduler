// DEPENDENCIES
var currentDay = document.getElementById("current-day");
var descriptionText = document.querySelector(".description");

$(document).ready(function () {
  console.log("ready!");
});

// TO GET THE CURRENT DATE - find a way to display the day of the week
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
//January is 0!
var yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;
// document.write(today);
// TO GET CURRENT TIME - DONE
currentDay.textContent = today;
// gets the current of the user when are on the website
function myHour() {
  var d = new Date();
  var n = d.getHours();
  return parseInt(n);
}

// for (let i = 0; i < saveButton.length; i++) {
//   saveButton[i].addEventListener("click", function () {
//     console.log("Button was clicked.");
//     var divHour = event.target.parentNode.getAttribute("id");
//     // push task and hour into an array
//     var description = descriptionText.value.trim();
//     console.log(description);
//     console.log(divHour);
//     storeTasks(divHour, description);
//   });
// }

$(".saveBtn").on("click", function () {
  //get nearby values.
  console.log(this);
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  //set items in local storage.
  localStorage.setItem(time, text);
});

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
// TODO: work on coloring the blocks with the for loop

// function hourTracker() {
//     //get current number of hours.
//     var currentHour = moment().hour();

//     // loop over time blocks
//     $(".time-block").each(function () {
//         var blockHour = parseInt($(this).attr("id").split("hour")[1]);
//         console.log( blockHour, currentHour)

//         //check if we've moved past this time
//         if (blockHour < currentHour) {
//             $(this).addClass("past");
//             $(this).removeClass("future");
//             $(this).removeClass("present");
//         }
//         else if (blockHour === currentHour) {
//             $(this).removeClass("past");
//             $(this).addClass("present");
//             $(this).removeClass("future");
//         }
//         else {
//             $(this).removeClass("present");
//             $(this).removeClass("past");
//             $(this).addClass("future");
//         }
//     })
// };

// hourTracker();
