const expandMenubtn = document.getElementById("menu-expand");
function expandMenu() {
  expandMenubtn.classList.toggle("hidden");
}
const initialTranslateLTR = -48 * 4;
const initialTranslateRTL = 36 * 4;
function setUpIntersectionObserver(element, isLTR, speed) {
  const intersectionCB = (entries) => {
    const isIntersecting = entries[0].isIntersecting;
    //we have different entries but we are only observing our first entry.
    if (isIntersecting) {
      document.addEventListener("scroll", scrollHandler);
    } else {
      document.removeEventListener("scroll", scrollHandler);
    }
    //if our element is intersecting then we add it into our eventListener, else we remove it, so that it would not animate unnecessary.
  };
  const intersectionObserver = new IntersectionObserver(intersectionCB);
  // this callback is used to know whether the element is scroll, visible, or intersect or not
  //as our setUpIntersectionObserver gets called again and again, that's we are creating new intersection each time.

  intersectionObserver.observe(element);
  // our callback can observe easily that's why we create this observer
  //after the creation of new intersectionObserve only on element will get observe at once.

  function scrollHandler() {
    const translateX =
      (window.innerHeight - element.getBoundingClientRect().top) * speed;
    //window.innerHeight tells how much it get scroll
    //element.getBoundingClientReact().top tells how much distance from the top.
    //by subtracting element.getBoundingClientRect().top from window.innerHeight.innerHeight we get to know how much our element gets scroll in upwards direction.
    let totalTranslate = 0;
    if (isLTR) {
      totalTranslate = translateX + initialTranslateLTR;
    } else {
      totalTranslate = -(translateX + initialTranslateLTR);
    }
    element.style.transform = `translateX(${totalTranslate}px)`;
    //the speed we get from totalTranslate we passed it to our element
  }
}
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const line4 = document.getElementById("line4");

setUpIntersectionObserver(line1, true, 0.35);
setUpIntersectionObserver(line2, false, 0.35);
setUpIntersectionObserver(line3, true, 0.35);
setUpIntersectionObserver(line4, true, 0.35);

//calling our setUpIntersectionObserver for our different elements.

//for the FAQS
const dtElements = document.querySelectorAll("dt");
dtElements.forEach((element) => {
  element.addEventListener("click", () => {
    const ddId = element.getAttribute("aria-controls");
    //this will give us the id of the dd, relative to the dt user clicked
    const ddElement = document.getElementById(ddId);
    //now we have the id, so we can easily catch that element
    const ddArrow = element.querySelectorAll("i")[0];
    //first we find the element, then find i tag inside it.
    ddElement.classList.toggle("hidden");
    ddArrow.classList.toggle("-rotate-180");
    //we are reversing their initial property
  });
});
