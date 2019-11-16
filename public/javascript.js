$(document).ready(function() {
  var fartBtn = $("<div>");
  fartBtn.attr("class", "farts");
  $(".container").append(fartBtn);

  $(".farts").on("click", function() {
    console.log("clicked");
    playAudio();
  });

  function playAudio() {
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "public/test.mp3");
    audioElement.play();
  }
});
