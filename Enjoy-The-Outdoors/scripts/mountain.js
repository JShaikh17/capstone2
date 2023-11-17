const mountainData = document.querySelector("#mountainData");
const displayMountainOutput = document.querySelector("#displayMountainOutput");
const mountainImage = document.querySelector("#mountainImage");

function listMountains() {
  for (const mountain of mountainsArray) {
    let option = new Option(mountain.name, mountain.elevation);
    mountainData.appendChild(option);
  }
}

function displayMountainOnClick() {
  displayMountainOutput.innerText = "";
  mountainImage.innerHTML = "";
  for (const mountain of mountainsArray) {
    if (mountainData.value == mountain.elevation) {
      displayMountainOutput.innerText = `You selected the ${mountain.name} with an elevation of (${mountainData.value}). The effort it takes to climb this mountain is ${mountain.effort}. 
        ${mountain.desc}`;
      let addImage = document.createElement("img");
      addImage.src = `images/${mountain.img}`;
      addImage.alt = "Mountain Picture";
      mountainImage.appendChild(addImage);
    }
  }
  if (mountainData.value == "select") {
    alert("No mountain was selected");
    return mountainData.value;
  }
}

listMountains();

function getSunriseSunset(latitude, longitude) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your Sunrise-Sunset.org API key
    const apiUrl = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&formatted=0&date=today`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const sunrise = new Date(data.results.sunrise);
            const sunset = new Date(data.results.sunset);

            console.log(`Sunrise: ${sunrise.toLocaleTimeString()}`);
            console.log(`Sunset: ${sunset.toLocaleTimeString()}`);
        })
        .catch(error => console.error('Error fetching sunrise/sunset data:', error));
}

// Replace with the actual latitude and longitude of your location
const latitude = "LATITUDE";
const longitude = "LONGITUDE";

getSunriseSunset(latitude, longitude);

