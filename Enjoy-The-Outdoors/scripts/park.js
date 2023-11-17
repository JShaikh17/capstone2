const parkDropdown = document.querySelector("#parkDropdown");
const parkTypeTable = document.querySelector("#parkTypeTable");
const parkTableBody = document.querySelector("#parkTableBody");
const byLocationRadioFilter = document.querySelector("#byLocationRadioFilter");
const byTypeRadioFilter = document.querySelector("#byTypeRadioFilter");
const byAllRadioFilter = document.querySelector("#byAllRadioFilter");
const parkArticle = document.querySelector("#parkArticle");

//  state dropdown
function loadStatesList() {
  let selectOption = new Option("option");
  selectOption.textContent = "Select by state...";
  parkDropdown.appendChild(selectOption);

  for (const location of locationsArray) {
    let option = document.createElement("option");
    option.textContent = location;
    option.value = location;
    parkDropdown.appendChild(option);
  }
}

function loadTypeList() {
  let selectOption = new Option("option");
  selectOption.textContent = "Select by type...";
  parkDropdown.appendChild(selectOption);

  for (const type of parkTypesArray) {
    let option = document.createElement("option");
    option.innerText = type;
    option.value = type;
    parkDropdown.appendChild(option);
  }
}

function loadParksTable() {
    parkTableBody.innerHTML = "";
  for (const park of nationalParksArray) {
    buildParkRow(park);
  }
}

function buildParkRow(park) {
  let row = parkTableBody.insertRow(-1);
  let cell1 = row.insertCell(0);
  cell1.innerText = park.LocationID;
  let cell2 = row.insertCell(1);
  cell2.innerText = park.LocationName;
  let cell3 = row.insertCell(2);
  cell3.innerText = park.Address;
  let cell4 = row.insertCell(3);
  cell4.innerText = park.City;
  let cell5 = row.insertCell(4);
  cell5.innerText = park.State;
  let cell6 = row.insertCell(5);
  cell6.innerText = park.ZipCode;
  let cell7 = row.insertCell(6);
  cell7.innerText = park.Phone;
  let cell8 = row.insertCell(7);
  cell8.innerText = park.Fax;
  let cell9 = row.insertCell(8);
  cell9.innerText = park.Latitude;
  let cell10 = row.insertCell(9);
  cell10.innerText = park.Longitude;
}
function createLocationData() {
  parkTableBody.innerHTML = "";

  const selectedState = parkDropdown.value;
  const selectedType = parkTypesArray.find((type) => selectedState.includes(type));

  for (const park of nationalParksArray) {
    const islandState = selectedState == "Rhode Island" || selectedState == "Virgin Islands";

    if (park.State == selectedState || (park.LocationName.includes(selectedType) && !islandState)) {
      buildParkRow(park);
    }
  }
}

// wire up functions

parkDropdown.onchange = createLocationData;

byTypeRadioFilter.onclick = function () {
  parkDropdown.style.display = "block";
  parkTypeTable.style.display = "block";
  parkArticle.style.display = "block"
  parkDropdown.innerText = "";
  loadTypeList();
};

byLocationRadioFilter.onclick = function () {
  parkDropdown.style.display = "block";
  parkTypeTable.style.display = "block";
  parkArticle.style.display = "block"
  parkDropdown.innerText = "";

  loadStatesList();
};

byAllRadioFilter.onclick = function () {
  parkTypeTable.style.display = "block";
  parkArticle.style.display = "none";
  parkDropdown.style.display = "none";
  for (const park of nationalParksArray) {
    buildParkRow(park);
  }
};