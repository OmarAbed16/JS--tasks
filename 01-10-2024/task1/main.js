"use strict";

let apiURL =
  "https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/merc?format=json"; //url

fetch(apiURL)
  .then((response) => {
    return response.json();
  })
  .then((banana) => {
    console.log(banana);
    const result = banana.Results;
    console.log(result);

    for (let i = 0; i < result.length; i++) {
      let record = result[i].MakeName;
      let record1 = result[i].VehicleTypeName;

      let el = document.createElement("div");
      el.style.border = "1px solid black";
      el.style.width = "300px";
      el.style.borderRadius = "10px";
      el.style.padding = "20px";
      el.style.margin = "10px";
      el.innerHTML = "<b>" + record + "</b><br>" + record1;
      document.body.appendChild(el);
    }
  });
