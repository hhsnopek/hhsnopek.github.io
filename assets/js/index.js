console.log('psst, hover over my body')

var holo = document.getElementById("holo");
var displayHolo = function() {
  if (holo.classList.contains("active"))
    return null;
  else
    return holo.classList.add("active");
}

holo.onmousedown = displayHolo;
holo.onmouseover = displayHolo;
