export const cleanData = (data) => {
    if (data.length >= 0) document.querySelector(data).innerHTML = "";
  };