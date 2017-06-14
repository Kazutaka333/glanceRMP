var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.ratemyprofessors.com/", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    // innerText does not let the attacker inject HTML elements.
    document.getElementById("resp").innerText = xhr.responseText;
  }
}
xhr.send();