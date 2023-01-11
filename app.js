const number = document.querySelectorAll(".number");
number.forEach((value) => {
  value.innerHTML = "0";
  let updateCounter = () => {
    const targetCount = Number(value.getAttribute("data-gouranga"));
    const startingPoint = Number(value.innerHTML);
    const incr = targetCount / 100;

    if (startingPoint < targetCount) {
      value.innerHTML = `${Math.round(startingPoint + incr)}`;
      setTimeout(updateCounter, 10);
    } else {
      value.innerHTML = targetCount;
    }
  };
  updateCounter();
});
