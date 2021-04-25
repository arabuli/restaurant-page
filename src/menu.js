function menuPage() {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  const headerElement = document.createElement("h1");
  headerElement.textContent = "Our Menu";
  menuContainer.appendChild(headerElement);

  //Create Description
  const paragraphElement = document.createElement("p");
  paragraphElement.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio culpa libero quo numquam, quae accusamus ducimus quidem voluptatibus dolor itaque mollitia sint! Repellendus exercitationem dolorem omnis repudiandae. Expedita, similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio culpa libero quo numquam, quae accusamus ducimus quidem voluptatibus dolor itaque mollitia sint! Repellendus exercitationem dolorem omnis repudiandae. Expedita, similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio culpa libero quo numquam, quae accusamus ducimus quidem voluptatibus dolor itaque mollitia sint! Repellendus exercitationem dolorem omnis repudiandae. Expedita, similique.";
  menuContainer.appendChild(paragraphElement);
  return menuContainer;
}

export default menuPage;
