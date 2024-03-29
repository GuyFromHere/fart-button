$(document).ready(function() {
  var farts = [
    "fart1.m4a",
    "fart2.m4a",
    "fart3.m4a",
    "fart4.m4a",
    "fart5.m4a",
    "fart6.m4a"
  ];
  var fartBtn = $("<div>");

  function playAudio() {
    var audioElement = document.createElement("audio");
    var fartFile = Math.floor(Math.random() * Math.floor(farts.length));
    audioElement.setAttribute("src", "public/audio/" + farts[fartFile]);
    audioElement.play();
  }

  fartBtn.attr("class", "farts");
  $(".container").append(fartBtn);

  $(".farts").on("touchend", function(e) {
    e.preventDefault();
    fartBtn.toggleClass("fartsDown");
    playAudio();
  });

  $(".farts").on("touchstart", function(e) {
    e.preventDefault();
    fartBtn.toggleClass("fartsDown");
  });

  $(".farts").on("mousedown", function(e) {
    e.preventDefault();
    fartBtn.toggleClass("fartsDown");
    playAudio();
  });

  $(".farts").on("mouseup", function(e) {
    e.preventDefault();
    fartBtn.toggleClass("fartsDown");
  });
});
