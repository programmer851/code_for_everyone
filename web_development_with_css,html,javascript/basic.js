function night() {
    var body = document.getElementById("body").style.transition = "all 1s";
    var body = document.getElementById("body").style.background = "black";
    var night = document.getElementById("night").style.display = "none";
    var day = document.getElementById("day").style.display = "block"
    var sun = document.getElementById("sun").style.display = "block"
}
function day() {
    var sun = document.getElementById("sun").style.display = "none"
    var slow = document.getElementById("body").style.transition = "all 2s ease-in-out";
    var bodycolor = document.getElementById("body").style.background = "linear-gradient(90deg,rgb(230, 173, 68), rgb(206, 76, 206), rgb(61, 204, 230))";
    var day = document.getElementById("day").style.display = "none";
    var night = document.getElementById("night").style.display = "block";
    
}
