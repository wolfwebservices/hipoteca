var currentLetter = 0;
var intervalID;
var clickCount = 0; // <-- add this line
var isStart = false;

function mrclick() {

  if  (!isStart) {
      clickCount++;
      if (clickCount == 1) {
        document.getElementById("test").style.backgroundColor = "#202020";
      }
      if (clickCount == 2) {
          //do the second click stuff
          document.getElementById("test").style.backgroundColor = "red";
          clickCount = 0; // <-- add this line
      }

}
}
