export const pagloop = (arrows, params, N) => {
    let step = N;
    params[0].style.transform = "translateX(" + 25 + "px)";
  for (let index = 0; index < arrows.length; index++) {
    const element = arrows[index];
    element.addEventListener("click", function () {
        params[0].style.transform = "translateX(" + 25 + "px)";
      if (index == 0) {
        step = step - 35;
        params[0].style.transform = "translateX(-" + step + "px)";
      } else {
        step = step + 35;
        params[0].style.transform = "translateX(-" + step + "px)";
      }
    });
  }
};