let burgerButton = document.getElementById("burger");
let nav = document.getElementById("nav");
let home = document.getElementById("home");
let headerOverlay = document.getElementById("headerOverlay");
let body = document.getElementById("body");

let headerNav = document.getElementById("headerNav");

let headerContentLeft = document.getElementById("headerContentLeft");
let headerContentRight = document.getElementById("headerContentRight");

const scrollTop = document.getElementById("scrollTop");
const anchors = document.querySelectorAll('a[href*="#"]')

const windowWidth = document.documentElement.clientWidth;


window.addEventListener("scroll", function(){
    if(window.scrollY >= 1000)
    {
        scrollTop.classList.add("scrollTopActive");
    }
    else {
        scrollTop.classList.remove("scrollTopActive");
    }
})

window.onload = function() {
    CreateAnimationHeader();
};

burgerButton.addEventListener('click', function() {
    CreateAnimationNav();
    CheckAnimationNav();   
});

scrollTop.addEventListener("click", ScrollTop);

ScrollToElement();

// Функции
function ScrollTop() {
    document.getElementById("header").scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
}

function ScrollToElement() {
    for (let anchor of anchors)
    {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            CreateAnimationNav();
            CheckAnimationNav();
            const blockID = anchor.getAttribute('href');
            document.querySelector(blockID).scrollIntoView({
                behavior: "smooth",
                block: "start"
            })

        })
    }
}

function CreateAnimationHeader() {
    headerContentLeft.classList.toggle("headerContentLeftActive");
    headerContentRight.classList.toggle("headerContentRightActive")
    headerNav.classList.toggle("headerNavActive");
}

function CreateAnimationNav() {
    nav.classList.toggle("triggerPositionNav");
    burgerButton.classList.toggle("headerNavBurgerActive");
    headerOverlay.classList.toggle("headerOverlayActive");
    
}

function CheckAnimationNav() {
    if (nav.classList.contains("triggerPositionNav")) {
        body.style.overflow = "hidden";
    } 
    if (windowWidth > 770) {
        body.style.overflow = "visible";
    }
    else {
        body.style.overflow = "visible";
    } 
}



//let isScrolling = false;
//
//window.addEventListener("scroll", throttleScroll, false);
//
//function throttleScroll(e) {
 //   if (isScrolling == false) {
 //       window.requestAnimationFrame(function() {
 //           dealWithScrolling(e);
  //          isScrolling = false;
  //      }
  //      )
  //  }
  //  isScrolling = true;
//}
//
//function throttleScroll (e) {
//}