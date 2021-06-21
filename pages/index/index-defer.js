function carouel_slide(className) {
  const nextBtn = document.getElementById(className + "-next");
  const prevBtn = document.getElementById(className + "-prev");
  nextBtn.addEventListener("click", nextEvent);
  prevBtn.addEventListener("click", prevEvent);

  const itemClassName =
    className + " transition-all ease-in-out duration-1000 transform";
  const items = document.getElementsByClassName(itemClassName);
  const totalItems = items.length;
  let slide = 0;

  // Set classes
  function setInitialClasses() {
    items[totalItems - 1].className = itemClassName + " -translate-x-full opacity-0";
    items[0].className = itemClassName + " translate-x-0 opacity-1";
    items[1].className = itemClassName + " translate-x-full opacity-0";
  }

  function nextEvent() {
    // If it's the last slide, reset to 0, else +1
    if (slide === totalItems - 1) {
      slide = 0;
    } else {
      slide++;
    }
    // Move carousel to updated slide
    moveCarouselTo(slide);
  }

  function prevEvent() {
    // If it's the first slide, set as the last slide, else -1
    if (slide === 0) {
      slide = totalItems - 1;
    } else {
      slide--;
    }

    // Move carousel to updated slide
    moveCarouselTo(slide);
  }

  function moveCarouselTo(slide) {
    console.log("current slide", slide, totalItems);
    // Update the "old" adjacent slides with "new" ones
    let newPrevious = slide - 1,
      newNext = slide + 1,
      oldPrevious = slide - 2,
      oldNext = slide + 2;

    // Test if carousel has more than three items
    if (totalItems - 1 >= 3) {
      // Checks and updates if the new slides are out of bounds
      if (newPrevious <= 0) {
        oldPrevious = totalItems - 1;
      } else if (newNext >= totalItems - 1) {
        oldNext = 0;
      }
      // Checks and updates if slide is at the beginning/end
      if (slide === 0) {
        newPrevious = totalItems - 1;
        oldPrevious = totalItems - 2;
        oldNext = slide + 1;
      } else if (slide === totalItems - 1) {
        newPrevious = slide - 1;
        newNext = 0;
        oldNext = 1;
      }
      
      // Reset old next/prev elements to default classes
      console.log("oldPrevious", oldPrevious, "oldNext", oldNext);
      items[oldPrevious].className =
        itemClassName + " translate-x-full opacity-0";
      items[oldNext].className = itemClassName + " translate-x-full opacity-0";
      
      // Add new classes
      items[newPrevious].className =
        itemClassName + " -translate-x-full opacity-0";
      items[slide].className = itemClassName + " translate-x-0 opacity-1";
      items[newNext].className = itemClassName + " translate-x-full opacity-0";
    }
  }

  setInitialClasses();
}

carouel_slide("room-carouel");
