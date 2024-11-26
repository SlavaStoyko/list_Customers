import { pagloop } from "./slider.js";
import { getStatusmessageData } from "./infoMessage.js";
import { sliceContent } from "./rendering.js";
export const getActivebtnP = (data, viewportContent) => {
    const arrows = document.getElementsByClassName("arrow");
    const arrayBtnP = document.getElementsByClassName("navbtn_check");
    arrayBtnP[0].children[0].classList.add("onActive");
    for (const btn of arrayBtnP[0].children) {
      btn.removeEventListener("click", (event) => changeStatusBtn(event, arrayBtnP[0].children, data, viewportContent));
      btn.addEventListener("click", (event) => changeStatusBtn(event, arrayBtnP[0].children, data, viewportContent));
    }
    pagloop(arrows, arrayBtnP, 0);
    getStatusmessageData(arrayBtnP[0].children[0].textContent, arrayBtnP[0].children.length, data.length);
  };
  const changeStatusBtn = (event, btnAll, data, viewportContent) => {
    for (const btn of btnAll) {
      btn.classList.remove("onActive");
    }
    event.target.classList.add("onActive");
    sliceContent(data, viewportContent, event.target.innerText);
    getStatusmessageData(event.target.innerText, btnAll.length, data.length);
  };