const homePage = document.getElementsByClassName('home-sub-section')[0]
const aboutPage = document.getElementsByClassName('about-section')[0]
const portfolioPage = document.getElementsByClassName('portfolio-section')[0]
const contactPage = document.getElementsByClassName('contact-page')[0]
const navIcon = document.getElementsByClassName('nav-icon')

const htmlProject = document.querySelectorAll('.html-project')
const jsProject = document.querySelectorAll('.js-project')
const navColor = document.querySelectorAll('.navi')

// const allButton = document.getElementsByTagName('button')

// function toHomePage(){
//   homePage.style.display = 'block';
//   aboutPage.style.display = 'none';
//   contactPage.style.display = 'none';
// }



// DEFAULT ICON IMG
let defaultDarkIcons = {
  '0': 'images/icons/home-icon-black2-removebg-preview.png',
  '1': 'images/icons/about-icon-black-removebg-preview.png',
  '2': 'images/icons/portfolio-black-icon-removebg-preview.png',
  '3': 'images/icons/contact-icon-black-removebg-preview.png',
};

let selectedIcons = {
  '0': 'images/icons/Home-icon-red-removebg-preview.png',
  '1': 'images/icons/about.png',
  '2': 'images/icons/portfolio-red-icon.png',
  '3': 'images/icons/contact-icon-red2.png',
};




// Change Page Function
function toContactPage() {
  homePage.style.display = 'none';
  aboutPage.style.display = 'none';
  portfolioPage.style.display = 'none';
  contactPage.style.display = 'block';

  // Iterate over navigation items
  navColor.forEach((navig, index) => {
    if (navig.classList.contains('contact-menu')) {  // Assuming portfolio menu item has class 'portfolio-menu'
      navig.style.color = 'red';  // Highlight the portfolio menu
    } else {
      navig.style.color = 'black';  // Set other items to black
    }
  });

  // Highlight selected icon and reset others
  Array.from(navIcon).forEach((icon, index) => {
    icon.src = (index === 3) ? selectedIcons[index] : defaultDarkIcons[index];
    icon.closest('.nav-item').style.color = (index === 3) ? 'red' : 'black';
  });
}




function toHomePage(){
  homePage.style.display = 'block';
  aboutPage.style.display = 'none';
  portfolioPage.style.display = 'none';
  contactPage.style.display = 'none';

  // Iterate over navigation items
  navColor.forEach((navig, index) => {
    if (navig.classList.contains('home-menu')) {  // Assuming portfolio menu item has class 'portfolio-menu'
      navig.style.color = 'red';  // Highlight the portfolio menu
    } else {
      navig.style.color = 'black';  // Set other items to black
    }
  });

  // Highlight selected icon and reset others
  Array.from(navIcon).forEach((icon, index) => {
    icon.src = (index === 0) ? selectedIcons[index] : defaultDarkIcons[index];
    icon.closest('.nav-item').style.color = (index === 0) ? 'red' : 'black';
  });
};




function toAboutPage(){
  homePage.style.display = 'none';
  aboutPage.style.display = 'block';
  portfolioPage.style.display = 'none';
  contactPage.style.display = 'none';


  // Highlight selected icon and reset others
  Array.from(navIcon).forEach((icon, index) => {
    icon.src = (index === 1) ? selectedIcons[index] : defaultDarkIcons[index];
    icon.closest('.nav-item').style.color = (index === 1) ? 'red' : 'black';
  });

  // Iterate over navigation items
  navColor.forEach((navig, index) => {
    if (navig.classList.contains('about-menu')) {  // Assuming portfolio menu item has class 'portfolio-menu'
      navig.style.color = 'red';  // Highlight the portfolio menu
    } else {
      navig.style.color = 'black';  // Set other items to black
    }
  });
};



function toPortfolioPage(){
  homePage.style.display = 'none';
  aboutPage.style.display = 'none';
  portfolioPage.style.display = 'block';
  contactPage.style.display = 'none';


  Array.from(navIcon).forEach((icon, index) => {
    icon.src = (index === 2) ? selectedIcons[index] : defaultDarkIcons[index];
    icon.closest('.nav-item').style.color = (index === 1) ? 'red' : 'black';
  });

// Iterate over navigation items
  navColor.forEach((navig, index) => {
    if (navig.classList.contains('portfolio-menu')) {  // Assuming portfolio menu item has class 'portfolio-menu'
      navig.style.color = 'red';  // Highlight the portfolio menu
    } else {
      navig.style.color = 'black';  // Set other items to black
    }
  });
};


window.onload = function() {
  toHomePage();
}


// Select the projects
function toHtmlProject(){
  htmlProject.forEach(project => {
    project.style.display = 'block';
  });

  jsProject.forEach(project => {
    project.style.display = 'none';
  });
}

function toJsProject(){
  htmlProject.forEach(project => {
    project.style.display = 'none';
  });

  jsProject.forEach(project => {
    project.style.display = 'block';
  });
}

function allProjects(){
  htmlProject.forEach(project => {
    project.style.display = 'block';
  })

  jsProject.forEach(project => {
    project.style.display = 'block';
  })
}

navColor.forEach(nav => {
  console.log(nav);
});



function selectMenu(){
  var navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active');

  menu = document.getElementById('menu')
  // menu.style.display = 'block'; 
  menu.classList.toggle('active');
};


// Display a window message when all buttons are clicked
function buttonMessage() {
  window.alert("The following service isn't currently available")
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', buttonMessage);
});
