
// Start the tab button

var tabs = document.querySelectorAll('[data-tab-value]');
var tabInfos = document.querySelectorAll('[data-tab-info]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        var target = document.querySelector(tab.dataset.tabValue);

        tabInfos.forEach(tabInfo => {
            tabInfo.classList.remove('active')
        })
        target.classList.add('active');
    })
})





// MOBILE MENU OFF CANVAS 
var openToggle = document.querySelector("#myBtn");
var closeToggle = document.querySelector(".closebtn");

closeToggle.addEventListener("click", closeNav);
openToggle.addEventListener("click", openNav);



function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("main").style.marginLeft = "0";

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";

}







