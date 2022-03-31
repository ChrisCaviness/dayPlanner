var saveButton = document.querySelectorAll(".saveButton");
var hourBlockEl = document.querySelectorAll(".hour-content");
var hourEl = document.querySelectorAll(".hour");

var today = moment();
$("#currentTime").text(today.format("LLLL")); 

function showTimeBlocks() {
  for ( var i = 0; i < hourEl.length; i++) { 
    var time = hourEl[i].textContent;
    var text = localStorage.getItem(time);
    hourEl[i].nextElementSibling.value = text;
  }
}
showTimeBlocks();

var hourArray = [];
for ( var i = 0; i < hourEl.length; i++) {
  var hourVal = parseInt(hourEl[i].getAttribute("id"));
  hourArray.push(hourVal);
}

var hourNow = moment();
hourNow = parseInt(hourNow.format("H"));

for ( var i = 0; i < hourArray.length; i++) {
  if (hourNow == hourArray[i]) {
    hourBlockEl[i].classList.add("present");
  } else if (hourNow < hourArray[i]) {
    hourBlockEl[i].classList.add("future");
  } else {
    hourBlockEl[i].classList.add("past");
  }
}

for ( var i = 0; i < saveButton.length; i++) { 
  saveButton[i].addEventListener("click", function (event) {
    var entry = event.target.previousElementSibling.value;
    if(entry == null) {
      return;
    }
    var timeName = event.target.previousElementSibling.previousElementSibling.textContent;
    localStorage.setItem(timeName, entry);
  })
};
