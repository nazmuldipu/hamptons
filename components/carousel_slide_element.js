function carousel_slide(className) {
    const nextBtn = document.getElementById(className + "-next");
    const prevBtn = document.getElementById(className + "-prev");
    nextBtn.addEventListener("click", nextEvent);
    prevBtn.addEventListener("click", prevEvent);
  
    const itemClassName =
      className + " w-full transition-all ease-in-out duration-1000 transform";
    const items = document.getElementsByClassName(className);
    const totalItems = items.length;
    let slide = 0;
   
    items[totalItems - 1].className = itemClassName + " -translate-x-full opacity-0";
    items[0].className = itemClassName + " translate-x-0 opacity-1";
    items[1].className = itemClassName + " translate-x-full opacity-0";
    for(let i = 2; i < totalItems-1; i++){
      items[i].className = itemClassName + " hidden";
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
        items[oldPrevious].className =
          itemClassName + " hidden";
        items[oldNext].className = itemClassName + " hidden";
        
        // Add new classes
        items[newPrevious].className =
          itemClassName + " -translate-x-full opacity-0";
        items[slide].className = itemClassName + " translate-x-0 opacity-1";
        items[newNext].className = itemClassName + " translate-x-full opacity-0";
      }
    }
  
    // setInitialClasses();
  }

  export default{ carousel_slide }