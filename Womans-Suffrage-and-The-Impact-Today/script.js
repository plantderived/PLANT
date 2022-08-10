/* FUNFACT */
var displayName = document.getElementById("secret");
var button = document.getElementById("myButton");

button.addEventListener("click", displaySecret);

function displaySecret(){
  var text = document.getElementById("myText").value;
  displayName.innerHTML = text + ", did you know that the Women’s Rights National Historical Park Historic District comprises four discontinuous units that are linked to the early nineteenth-century Women’s Rights Movement in the United States and to the First Women’s Rights Convention?"
}


var proceed = document.getElementById("proceed");
function showOverlay(){
  document.getElementById("overlay").style.display = "block";
}
window.addEventListener("load", showOverlay);
proceed.addEventListener("click", closeOverlay);
function closeOverlay(){
  document.getElementById("overlay").style.display = "none";
}