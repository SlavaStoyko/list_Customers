import { data } from "./data.js";
import { getLengthContent } from "./rendering.js";
import { getActivebtnP } from "./navPagination.js";

export const initialUISetup = () => {
  getLengthContent(data().customers, 6);
  getActivebtnP(data().customers, 6);

  document.querySelector("#search").addEventListener("input", (event) => {
    event.preventDefault();
    let ArrData = data().customers.filter((item) => {
      if (event.target.value === " ") {
        return item;
      } else {
        return item.name.toLowerCase().match(event.target.value);
      }
    });
    getLengthContent(ArrData, 6);
    getActivebtnP(ArrData, 6);
  });
  document.getElementById("search").addEventListener("focus", () => (document.getElementById("lablelSearch").style.visibility = "hidden"));
  document.getElementById("search").addEventListener("blur", () => (document.getElementById("lablelSearch").style.visibility = "visible"));
};
