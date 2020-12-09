function changeButton(name, img, text) {
  var btn = document.getElementById(name);
  btn.innerHTML = text;
  btn.style.backgroundImage = "url(" + img + ")";
}

function changeButton(name, img, text, color) {
  var btn = document.getElementById(name);
  btn.innerHTML = text;
  btn.style.backgroundImage = "url(" + img + ")";
  btn.style.color = color;
}

function enforceMinMax(val){
  if(val.value != ""){
    if(parseInt(val.value) < parseInt(val.min)){
      val.value = val.min;
    }
    if(parseInt(val.value) > parseInt(val.max)){
      val.value = val.max;
    }
  }
}

function questionMinMax(val){
  if(val.value != ""){
    if(parseInt(val.value) < parseInt(val.min)){
      val.value = val.min;
    }
    if(parseInt(val.value) > parseInt(val.max)){
      val.value = val.max;
    }
  }
}

function showmenu(name){
  var btn = document.getElementById(name);
  var bool = true;
  if(btn.classList.contains('show')){
    bool = false;
  }
  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
  if(bool){
    btn.classList.toggle("show");
  }
}

window.onclick = function(event) {
  var loginpage = document.getElementById('id01');
  if (event.target == loginpage) {
    loginpage.style.display = "none";
  }
  else if (!event.target.matches('.dropdiv')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}