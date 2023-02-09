
// Burger MENU 

const icons = document.querySelectorAll('.nav-icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});


// Open And Closed Menu For All Pages Website 

let ButtonBurger = document.querySelector('#ButtonBurger');
let MenuNav      = document.querySelector('.header__list');

ButtonBurger.addEventListener('click' , () => {
   MenuNav.classList.toggle('MenuNavbarOpen');
   console.log(ButtonBurger);
});


// Meetting Page 
//Open and Close Menu SIDEBAR 

let ButtonMeetingOpenSidebar = document.querySelector('.dashboard__header__burger');
let MenuSidebar              = document.querySelector('#sidebarMenu');
let ClosedMeetingMenu        = document.querySelector('#BtnMeetingClosedMenu');

ButtonMeetingOpenSidebar.addEventListener('click', () => {
   document.querySelector("#sidebarMenu").style.display = 'flex';// This is Element in file ==> Core/Sidebar.scss 
});

ClosedMeetingMenu.addEventListener('click', () => {
  document.querySelector('#sidebarMenu').style.display = 'none';
  console.log("Aieux");
})
console.log(ClosedMeetingMenu)