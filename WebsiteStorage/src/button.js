function changeButton(name, img, text) {
    var btn = document.getElementById(name);
    btn.innerHTML = text;
    btn.style.backgroundImage = "url(" + img + ")";
}
