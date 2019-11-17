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
    audioElement.setAttribute("src", "public/" + farts[fartFile]);
    audioElement.play();
  }

  fartBtn.attr("class", "farts");
  $(".container").append(fartBtn);

  $(".farts").on("mouseup touchend", function() {
    fartBtn.toggleClass("fartsDown");
    playAudio();
  });

  $(".farts").on("mousedown touchstart", function() {
    fartBtn.toggleClass("fartsDown");
  });
});
