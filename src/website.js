import homePage from "./homepage";
import menuPage from "./menu";
import contact from "./contact";

let getConentContainer = document.getElementById("content");

//Single section for storing home, menu and contact pages.
let singleSection = document.createElement("div");
singleSection.classList.add("section");

function createNavigation() {
  let navigationDiv = document.createElement("div");
  navigationDiv.classList.add("navigation");

  //Add Home Button
  let homepageButton = document.createElement("button");
  homepageButton.textContent = "Homepage";
  navigationDiv.appendChild(homepageButton);
  homepageButton.addEventListener("click", function () {
    singleSection.innerHTML = "";
    singleSection.appendChild(homePage());
    getConentContainer.appendChild(singleSection);
  });

  //Add Menu Button
  let menuButton = document.createElement("button");
  menuButton.textContent = "Menu";
  navigationDiv.appendChild(menuButton);
  menuButton.addEventListener("click", function () {
    singleSection.innerHTML = "";
    singleSection.appendChild(menuPage());
    getConentContainer.appendChild(singleSection);
  });

  //Add Contact Button
  let contactButton = document.createElement("button");
  contactButton.textContent = "Contact";
  navigationDiv.appendChild(contactButton);
  contactButton.addEventListener("click", function () {
    singleSection.innerHTML = "";
    singleSection.appendChild(contact());
    getConentContainer.appendChild(singleSection);
  });
  return navigationDiv;
}

function populateHome() {
  singleSection.appendChild(homePage());
  getConentContainer.appendChild(singleSection);
  return singleSection;
}

export { createNavigation, populateHome };
