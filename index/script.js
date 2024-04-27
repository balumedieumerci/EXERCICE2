var menuIcon = document.querySelector(".menuIcon");
var sidebar = document.querySelector(".side-bar");
var subscribe_list = document.querySelector(".subscribe-list");
var container = document.querySelector(".container");

menuIcon.onclick = function() {
    sidebar.classList.toggle("small-sidebar");
    subscribe_list.classList.toggle("hide");
    container.classList.toggle("large-container");
}