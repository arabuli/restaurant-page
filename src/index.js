import { createNavigation, populateHome } from "./website";

let getConentContainer = document.getElementById("content");

getConentContainer.appendChild(createNavigation());
getConentContainer.appendChild(populateHome());
