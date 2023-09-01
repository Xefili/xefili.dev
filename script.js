// check for Cookie and ajust CSS accordingly
const cookieValue = document.cookie.split("; ").find((row) => row.startsWith("displayMode="))?.split("=")[1];
if(cookieValue=="light") {
    hideDB();
}
if(cookieValue=="dark") {
    hideLB();
}
if(cookieValue=="") {
    console.log("Nothing changed!");
}
const cookiePolicy = document.cookie.split("; ").find((row) => row.startsWith("acceptedCookiePolicy="))?.split("=")[1];
if(cookiePolicy=="true") {
    document.getElementById("notice").className = "hide";
    document.getElementById("pageHead").style.marginTop = 0;
}

function hideElement() {
    document.cookie = "acceptedCookiePolicy=true; SameSite=Lax; max-age=604800"
    document.getElementById("notice").className = "hide";
    document.getElementById("pageHead").style.marginTop = 0;
}
// Variables to change Navbar style to mobile layout and back
var spanTag = "<span style='margin-left: 0.5rem;' class='material-symbols-outlined'>home</span>";
var spanTag2 = "<span style='margin-left: 0.5rem;' class='material-symbols-outlined'>chat</span>";
var spanTag3 = "<span style='margin-left: 0.5rem;' class='material-symbols-outlined'>description</span>";
var spanTag4 = "<span style='margin-left: 0.5rem;' class='material-symbols-outlined'>construction</span>";

// Media query to detect screensize and anjust navbar style
if(window.matchMedia("only screen and (max-device-width: 480px)").matches) {
    // alert("Media Matched!");
    document.getElementById("home").innerHTML = spanTag;
    document.getElementById("blog").innerHTML = spanTag2;
    document.getElementById("docs").innerHTML = spanTag3;
    document.getElementById("tools").innerHTML = spanTag4;
} else {
    document.getElementById("home").innerHTML = "Home" + spanTag;
    document.getElementById("blog").innerHTML = "Blog" + spanTag2;
    document.getElementById("docs").innerHTML = "Documentation" + spanTag3;
    document.getElementById("docs").innerHTML = "Documentation" + spanTag3;
    document.getElementById("tools").innerHTML = "Tools" + spanTag4;
}

// Change the Light-/Darkmode Switch and set Cookie
function hideLB() {
    document.getElementById("lightswitch").className = "hide";
    document.getElementById("darkswitch").className = "g";
    var link = document.getElementById("darkss");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "dark.css");
    document.cookie = "displayMode=dark; SameSite=Lax; max-age=3100000000000";
}
function hideDB() {
    document.getElementById("darkswitch").className = "hide";
    document.getElementById("lightswitch").className = "g";
    var link = document.getElementById("darkss");
    link.removeAttribute("rel");
    link.removeAttribute("href");
    document.cookie = "displayMode=light; SameSite=Lax; max-age=3100000000000"
}