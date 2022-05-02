const container = document.querySelector("#container");
const cont = document.createElement("div");

cont.classList.add("content");
cont.textContent = "Adding content with JS!";
cont.style.cssText = "color: blue";

container.appendChild(cont);
