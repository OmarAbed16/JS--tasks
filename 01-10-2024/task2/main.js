"use strict";

let apiURL = "https://restcountries.com/v3.1/all"; //url

fetch(apiURL)
  .then((response) => {
    return response.json();
  })
  .then((banana) => {
    const result = banana;
    console.log(result);

    for (let i = 0; i < result.length; i++) {
      if (result[i].name.common == "Israel") {
        return;
      }
      let record = result[i].name.common;
      let record1 = result[i].flags.png;
      console.log(result[i].name.common);
      let el = document.createElement("div");
      el.style.border = "1px solid black";
      el.style.width = "300px";
      el.style.borderRadius = "10px";
      el.style.padding = "20px";
      el.style.margin = "10px";
      el.innerHTML = "<b>" + record + "</b><br>coat Of Arms:<br>";

      let imgCard = document.createElement("img");
      imgCard.src = record1;
      el.appendChild(imgCard);
      document.body.appendChild(el);
    }
  });
