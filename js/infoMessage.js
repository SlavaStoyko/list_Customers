import { cleanData } from "./cleanData.js"
export const getStatusmessageData = (pagActive, PagSum, AllLengthData) => {
    cleanData(".navbtn_items");
    const divStatus = document.createElement("div");
    divStatus.innerHTML = `<p>Showing data ${pagActive} to ${PagSum} of ${AllLengthData} entries</p>`;
    document.querySelector(".navbtn_items").append(divStatus.firstChild);
  };