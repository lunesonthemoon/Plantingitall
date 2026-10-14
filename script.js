let inputBox = document.getElementById("inputBox");
let btnclick = document.querySelector("button#search");
let container = document.querySelector("#year");
let plant_name = document.querySelector("#plant-name");
let result_img = document.querySelector("#plant-img");
let sci_name = document.querySelector("#sci-name");
let fam_name = document.querySelector("#family-name");
let genus_name = document.querySelector("#genus");

function resetForm() {
    let form = document.getElementById("myForm");
    html.reset();
}

btnclick.addEventListener("click", () => {
    // 1. Clear previous results immediately
    result_img.innerHTML = "";
    plant_name.innerHTML = "";
    sci_name.innerHTML = "";
    fam_name.innerHTML = "";
    container.innerHTML = "";
    genus_name.innerHTML = "";

    let url = new URL('https://trefle.io/api/v1/plants/search');
    url.searchParams.set('token', "usr-a7nuvy_6p6rRw8017hnOz9NoExqM7KP47-zbnXcmgZs");
    url.searchParams.set('q', inputBox.value);
    
    fetch(url.href)
        .then(response => response.json())
        .then(json => {
            if (json.data && json.data.length > 0) {
                displayImage(json.data[0].image_url);
                updateCommonName(json.data[0].common_name);
                updateScientificName(json.data[0].scientific_name);
                updateFamilyCommonName(json.data[0].family_common_name);
                updateDiscovery(json.data[0].year);
                updateGenus(json.data[0].genus);
            }
        });
});

function displayImage(imageUrl) {
    console.log(imageUrl);
    let plantImage = document.createElement("img");
    plantImage.src = imageUrl;

    result_img.innerHTML = "";
    result_img.appendChild(plantImage);
}

function displayImage(imageUrl) {
    let plantImage = document.createElement("img");
    plantImage.src = imageUrl;

    // Force square dimensions and crop to fill

    plantImage.style.width = "100%";
    plantImage.style.height = "300px";
    plantImage.style.objectFit = "cover";

    result_img.innerHTML = "";
    result_img.appendChild(plantImage);
}

function updateCommonName(name) {
    let nameElement = document.createElement("p");
    nameElement.textContent = name || "Unknown Plant";
    plant_name.innerHTML = "";
    plant_name.appendChild(nameElement);
}

function updateScientificName(ScientificName) {
    let nameElement = document.createElement("p");
    nameElement.textContent = ScientificName || "Unknown Plant";
    sci_name.appendChild(nameElement);
}

function updateFamilyCommonName(FamilyName) {
    let nameElement = document.createElement("p");
    nameElement.textContent = FamilyName || "Unknown Plant";
    fam_name.appendChild(nameElement);
}

function updateDiscovery(Discovery) {
    let nameElement = document.createElement("p");
    nameElement.textContent = Discovery || "Unknown Date";
    container.appendChild(nameElement);
}

function updateGenus(Genus) {
    let nameElement = document.createElement("p");
    nameElement.textContent = Genus || "Unknown";
    genus_name.appendChild(nameElement);
}

///AAAAAAAAAAAAA
