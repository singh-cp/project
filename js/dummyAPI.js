const cityURL = "https://singh-cp.github.io/project/data/location.json";
const localURL = "https://singh-cp.github.io/project/data/profiles.json";
function getCity() {
  fetch(cityURL, { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      data.map((item) => {
        let element = document.createElement("option");
        let text = document.createTextNode(item.city);
        element.appendChild(text);
        element.value = item.city_id;
        document.getElementById("city_API").appendChild(element);
      });
    });
}

async function getLocals() {
  // Get the id of city
  let cityId = document.getElementById("city_API").value;
  //   Select local options HTML
  let localSelect = document.getElementById("local_API");
  //   Empty array for filling filtered the data
  let local_data = [];
  //   Remove all the options that were associated from other cities
  while (localSelect.length > 0) {
    localSelect.remove(0);
  }
  //   Fetch all the profiles
  let response = await fetch(`${localURL}`, {
    method: "GET",
  });
  let data = await response.json();
  //  Since it is not a real API, filter the profiles manually as per city id
  let finalData = data.filter((city_local) => {
    if (cityId == city_local.city_id) {
      local_data.push(city_local);
    }
  });
  //  Map the filtered data and create local options
  local_data.map((item) => {
    let element = document.createElement("option");
    let text = document.createTextNode(
      `${item.first_name} ${item.last_name} ₹${item.price}`
    );
    element.appendChild(text);
    element.value = item.city_id;
    document.getElementById("local_API").appendChild(element);
  });
}
