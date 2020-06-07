let menuButton = document.getElementById('menu-button')
let closeButton = document.getElementById('close-button')
let sideBar = document.getElementById('mySidebar')
let overlay = document.getElementById('myOverlay')

function init(){
	menuButton.addEventListener('click', showMenu)
	closeButton.addEventListener('click', closeMenu)
}

function showMenu(){
	sideBar.style.display = "block"
}
function closeMenu(){
	sideBar.style.display = "none"
}

init()