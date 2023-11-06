// Variables to change Navbar style to mobile layout and back
var spanTag = "<span style='margin-left: 0.5rem;' class='material-symbols-outlined'>home</span>";
var spanTag2 = "<span style='margin-left: 0.5rem;' class='material-symbols-outlined'>chat</span>";
var spanTag3 = "<span style='margin-left: 0.5rem;' class='material-symbols-outlined'>description</span>";
var spanTag4 = "<span style='margin-left: 0.5rem;' class='material-symbols-outlined'>construction</span>";

// Media query to detect screensize and anjust navbar style
if(window.matchMedia("only screen and (max-device-width: 480px)").matches) {
    document.getElementById("home").innerHTML = spanTag;
    document.getElementById("blog").innerHTML = spanTag2;
    document.getElementById("docs").innerHTML = spanTag3;
    document.getElementById("tools").innerHTML = spanTag4;
} 
else {
    document.getElementById("home").innerHTML = "Home " + spanTag;
    document.getElementById("blog").innerHTML = "Blog " + spanTag2;
    document.getElementById("docs").innerHTML = "Documentation " + spanTag3;
    document.getElementById("tools").innerHTML = "Tools " + spanTag4;
}