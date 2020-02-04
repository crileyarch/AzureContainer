// calculateVol.js - calulcate geometric volumes

function cylVol() {
  
  var radius = document.getElementById("radius").value;
  var height = document.getElementById("height").value;
  var out = document.getElementById("volume");
  volume.value = Math.PI*radius*radius*height;
}

