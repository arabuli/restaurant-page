function contact() {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");
  const headerElement = document.createElement("h1");
  headerElement.textContent = "Contact Us";
  contactContainer.appendChild(headerElement);

  //Create Description
  const paragraphElement = document.createElement("p");
  paragraphElement.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio culpa libero quo numquam, quae accusamus ducimus quidem voluptatibus dolor itaque mollitia sint! Repellendus exercitationem dolorem omnis repudiandae. Expedita, similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio culpa libero quo numquam, quae accusamus ducimus quidem voluptatibus dolor itaque mollitia sint! Repellendus exercitationem dolorem omnis repudiandae. Expedita, similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio culpa libero quo numquam, quae accusamus ducimus quidem voluptatibus dolor itaque mollitia sint! Repellendus exercitationem dolorem omnis repudiandae. Expedita, similique.";
  contactContainer.appendChild(paragraphElement);
  contactContainer.setAttribute("id", "maincontiner");
  return contactContainer;
}

export default contact;