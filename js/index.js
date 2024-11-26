import { data } from "./data.js";
window.onload = () => {
  initialHandler();
};
const initialHandler = () => {
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
const getLengthContent = (data, viewportContent) => {
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
const sliceContent = (arrayData, numbSlices, numberBtn) => {
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
const getActivebtnP = (data, viewportContent) => {
  const arrows = document.getElementsByClassName("arrow");
  const arrayBtnP = document.getElementsByClassName("navbtn_check");
  arrayBtnP[0].children[0].classList.add("onActive");
  for (const btn of arrayBtnP[0].children) {
    btn.removeEventListener("click", (event) => changeStatusBtn(event, arrayBtnP[0].children, data, viewportContent));
    btn.addEventListener("click", (event) => changeStatusBtn(event, arrayBtnP[0].children, data, viewportContent));
  }
  pagloop(arrows, arrayBtnP, 0);
  getStatusmessageData(arrayBtnP[0].children[0].textContent, arrayBtnP[0].children.length, data.length);
  console.log(arrayBtnP[0].children.length);
};
const changeStatusBtn = (event, btnAll, data, viewportContent) => {
  for (const btn of btnAll) {
    btn.classList.remove("onActive");
  }
  event.target.classList.add("onActive");
  sliceContent(data, viewportContent, event.target.innerText);
  getStatusmessageData(event.target.innerText, btnAll[0].children.length, data.length);
};
const getStatusmessageData = (pagActive, PagSum, AllLengthData) => {
  cleanData(".navbtn_items");
  const divStatus = document.createElement("div");
  divStatus.innerHTML = `<p>Showing data ${pagActive} to ${PagSum} of ${AllLengthData} entries</p>`;
  document.querySelector(".navbtn_items").append(divStatus.firstChild);
};
const cleanData = (data) => {
  if (data.length >= 0) document.querySelector(data).innerHTML = "";
};
const pagloop = (arrows, params, N) => {
    let step = N;
    params[0].style.transform = "translateX(" + 25 + "px)";
  for (let index = 0; index < arrows.length; index++) {
    const element = arrows[index];
    element.addEventListener("click", function () {
        params[0].style.transform = "translateX(" + 25 + "px)";
      //let L =  e[layerY];
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
