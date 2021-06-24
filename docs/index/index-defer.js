// components/carousel_slide_element.js
function carousel_slide(className) {
  const nextBtn = document.getElementById(className + "-next");
  const prevBtn = document.getElementById(className + "-prev");
  nextBtn.addEventListener("click", nextEvent);
  prevBtn.addEventListener("click", prevEvent);
  const itemClassName = className + " w-full transition-all ease-in-out duration-1000 transform";
  const items = document.getElementsByClassName(className);
  const totalItems = items.length;
  let slide = 0;
  items[totalItems - 1].className = itemClassName + " -translate-x-full opacity-0";
  items[0].className = itemClassName + " translate-x-0 opacity-1";
  items[1].className = itemClassName + " translate-x-full opacity-0";
  for (let i = 2; i < totalItems - 1; i++) {
    items[i].className = itemClassName + " hidden";
  }
  function nextEvent() {
    if (slide === totalItems - 1) {
      slide = 0;
    } else {
      slide++;
    }
    moveCarouselTo(slide);
  }
  function prevEvent() {
    if (slide === 0) {
      slide = totalItems - 1;
    } else {
      slide--;
    }
    moveCarouselTo(slide);
  }
  function moveCarouselTo(slide2) {
    let newPrevious = slide2 - 1, newNext = slide2 + 1, oldPrevious = slide2 - 2, oldNext = slide2 + 2;
    if (totalItems - 1 >= 3) {
      if (newPrevious <= 0) {
        oldPrevious = totalItems - 1;
      } else if (newNext >= totalItems - 1) {
        oldNext = 0;
      }
      if (slide2 === 0) {
        newPrevious = totalItems - 1;
        oldPrevious = totalItems - 2;
        oldNext = slide2 + 1;
      } else if (slide2 === totalItems - 1) {
        newPrevious = slide2 - 1;
        newNext = 0;
        oldNext = 1;
      }
      items[oldPrevious].className = itemClassName + " hidden";
      items[oldNext].className = itemClassName + " hidden";
      items[newPrevious].className = itemClassName + " -translate-x-full opacity-0";
      items[slide2].className = itemClassName + " translate-x-0 opacity-1";
      items[newNext].className = itemClassName + " translate-x-full opacity-0";
    }
  }
}
var carousel_slide_element_default = {carousel_slide};

// pages/index/index-defer.js
"use strict";
carousel_slide_element_default.carousel_slide("room-carousel");
carousel_slide_element_default.carousel_slide("comments-carousel");
carousel_slide_element_default.carousel_slide("amenities-carousel");
