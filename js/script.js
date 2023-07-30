const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
hamburger.addEventListener('click', () => {
  menu.classList.toggle('open');
})

var tabItems = document.querySelectorAll(".vertical-nav > li");

function handleClick() {
  var clickedTab = this;
  var tabbableContentItems = document.querySelectorAll(".tabbable-content > li");
  var index = Array.prototype.indexOf.call(tabItems, clickedTab);
  var tabContent = tabbableContentItems[index];

  tabContent.classList.add("show");
  
  Array.prototype.forEach.call(tabContent.parentNode.children, function(element) {
    if (element !== tabContent) {
      element.classList.remove("show");
    }
  });

  clickedTab.classList.add("selected");

  Array.prototype.forEach.call(clickedTab.parentNode.children, function(element) {
    if (element !== clickedTab) {
      element.classList.remove("selected");
    }
  });
}

Array.prototype.forEach.call(tabItems, function(tabItem) {
  tabItem.addEventListener("click", handleClick);
});

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


















var slideIndex = 0;
var slides = document.getElementsByClassName("slides")[0].children;
var indicators = document.getElementsByClassName("indicator")[0];

function showSlide(n) {
  slideIndex += n;

  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
  updateIndicators();
}

function changeSlide(n) {
  clearTimeout(timer);
  showSlide(n);
}

function autoplay() {
  timer = setInterval(function() {
    showSlide(1);
  }, 10000); // Altere o valor aqui para ajustar o tempo de exibição de cada slide
}

function createIndicators() {
  for (var i = 0; i < slides.length; i++) {
    var span = document.createElement("span");
    span.setAttribute("onclick", "showSlide(" + i + ")");
    indicators.appendChild(span);
  }
}

function updateIndicators() {
  var indicatorsArray = indicators.getElementsByTagName("span");

  for (var i = 0; i < indicatorsArray.length; i++) {
    indicatorsArray[i].className = "";
  }

  indicatorsArray[slideIndex].className = "active";
}

createIndicators();
autoplay();



