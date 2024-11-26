import { cleanData } from "./cleanData.js"
export const getLengthContent = (data, viewportContent) => {
    const valuePagination = Math.ceil(data.length / viewportContent);
    paginationItem(valuePagination);
    sliceContent(data, viewportContent, 1);
  };
  
  const paginationItem = (numbSlices) => {
    cleanData(".navbtn_check");
    for (let i = 1; i < numbSlices; i++) {
      const divPagItem = document.createElement("div");
      divPagItem.innerHTML = `<div class = "btnP swiper-slide">${i}</div>`;
      document.querySelector(".navbtn_check").append(divPagItem.firstChild);
    }
  };
  export const sliceContent = (arrayData, numbSlices, numberBtn) => {
    const btnPag = +numberBtn;
    let lastIndex = numbSlices * btnPag;
    let firstIndex = numbSlices * btnPag - numbSlices;
    const finalPageContent = arrayData.slice(firstIndex, lastIndex);
    renderContent(finalPageContent);
  };

const renderContent = (params) => {
    cleanData(".TBODY");
    const tbody = document.createElement("tbody");
  
    for (const item of params) {
      tbody.innerHTML += getStringData(item);
      document.querySelector(".TBODY").append(tbody.firstChild);
    }
  };
  const getStringData = (item) => {
    return `<tr class="tr Rtr tbody">
      <td class="td data_block">${item["name"]}</td>
      <td class="td ">${item["company"]}</td>
      <td class="td ">${item["phone"]}</td>
      <td class="td ">${item["email"]}</td>
      <td class="td ">${item["country"]}</td>
      <td class="td "><span class="status ${item.status === "Active" ? "btnA" : "btnF"}">${item["status"]}</span></td>
      </tr>`;
  };