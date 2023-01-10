const number = document.querySelectorAll(".number");
number.forEach((value) => {
  value.innerHTML = 0;
//   console.log("ok");
  let updateCounter = () => {
    const targetCount = Number( value.getAttribute("data-gouranga"));
    const startingPoint = Number(counter.innerHTML);
    const incr = targetCount / 100;

    if (startingPoint < targetCount) {
      counter.innerHTML = `${Math.round(startingPoint + incr)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerHTML = targetCount;
    }
  };
  updateCounter;
});
