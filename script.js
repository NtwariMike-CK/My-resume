const homePage = document.getElementsByClassName('home-sub-section')[0]
const aboutPage = document.getElementsByClassName('about-section')[0]
const portfolioPage = document.getElementsByClassName('portfolio-section')[0]
const contactPage = document.getElementsByClassName('contact-page')[0]
const htmlProject = document.querySelectorAll('.html-project')
const jsProject = document.querySelectorAll('.js-project')
const navColor = document.querySelectorAll('.navi')

// function toHomePage(){
//   homePage.style.display = 'block';
//   aboutPage.style.display = 'none';
//   contactPage.style.display = 'none';
// }

// Change Page
function toContactPage(){
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
};



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
};


function toAboutPage(){
  homePage.style.display = 'none';
  aboutPage.style.display = 'block';
  portfolioPage.style.display = 'none';
  contactPage.style.display = 'none';

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