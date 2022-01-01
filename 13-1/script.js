let menuIcon = document.querySelector("#header #HumbergerIcon")
menuIcon.addEventListener('click',showHideMenu);

let bodycontainer = document.querySelector("#mainContainer")
bodycontainer.addEventListener('click',showHideMenu);

function showHideMenu(e) {
    let menuElement = document.querySelector("aside#sidebar");
    menuElement.classList.toggle("show");
}