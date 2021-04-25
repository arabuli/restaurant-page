function homePage() {
  //Create Header
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("homepage-container");
  const headerElement = document.createElement("h1");
  headerElement.textContent = "Restaurant 'Gamarjoba' in middle of Potsdam";
  mainContainer.appendChild(headerElement);

  //Create Description
  const paragraphElement = document.createElement("p");
  paragraphElement.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio culpa libero quo numquam, quae accusamus ducimus quidem voluptatibus dolor itaque mollitia sint! Repellendus exercitationem dolorem omnis repudiandae. Expedita, similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio culpa libero quo numquam, quae accusamus ducimus quidem voluptatibus dolor itaque mollitia sint! Repellendus exercitationem dolorem omnis repudiandae. Expedita, similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio culpa libero quo numquam, quae accusamus ducimus quidem voluptatibus dolor itaque mollitia sint! Repellendus exercitationem dolorem omnis repudiandae. Expedita, similique.";
  mainContainer.appendChild(paragraphElement);
  mainContainer.setAttribute("id", "maincontiner");
  return mainContainer;
}

export default homePage;
