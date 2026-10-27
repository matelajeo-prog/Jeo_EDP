document.getElementById("foundForm").addEventListener("submit", function(event) {
event.preventDefault();

const item = {
    type: "Found",
    name: document.getElementById("foundName").value,
    description: document.getElementById("foundDescription").value,
    location: document.getElementById("foundLocation").value,
    contact: document.getElementById("foundContact").value
};

const items = JSON.parse(localStorage.getItem("items")) || [];
items.push(item);
localStorage.setItem("items", JSON.stringify(items));

document.getElementById("foundMessage").textContent =
    "Found item reported successfully!";

this.reset();

});

function displayItems() {
const items = JSON.parse(localStorage.getItem("items")) || [];
const itemList = document.getElementById("itemList");

itemList.innerHTML = "";

if (items.length === 0) {
    itemList.textContent = "No items reported yet.";
    return;
}

items.forEach(function(item) {
    const card = document.createElement("div");
    card.className = "item-card";

    const title = document.createElement("h3");
    title.textContent = item.type + ": " + item.name;

    const description = document.createElement("p");
    description.textContent = "Description: " + item.description;

    const location = document.createElement("p");
    location.textContent = "Location: " + item.location;

    const contact = document.createElement("p");
    contact.textContent = "Contact: " + item.contact;

    card.append(title, description, location, contact);
    itemList.appendChild(card);
});

}