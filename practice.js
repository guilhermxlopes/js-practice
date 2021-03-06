// add a new child div with the class of "content" inside of container div
const container = document.querySelector("#container");
const cont = document.createElement("div");
cont.classList.add("content");
cont.innerText = "Adding content with JS!";
cont.style.cssText = "color: blue";
container.appendChild(cont);

// create a p element inside of the body tag
const para = document.createElement("p");
para.style.color = "red";
para.innerText = "Hey, I'm red.";
document.body.appendChild(para);

// create a h3 element inside of the body tag
const tblue = document.createElement("h3");
tblue.style.color = "blue";
tblue.innerText = "I'm a blue h3!";
document.body.appendChild(tblue);

// black border with pink background with some elements inside
const divbox = document.createElement("div");
const firstt = document.createElement("h1");
const secondd = document.createElement("p");
const st = divbox.style;
const body = document.body;

divbox.classList.add("box");
st.backgroundColor = "pink";
st.borderStyle = "solid";
firstt.innerText = "I'm in a div! Yay!";
secondd.innerText = "Me too!";

divbox.append(firstt, secondd);
body.append(divbox);

// h1 purple with created div
const div = document.querySelector(".box");
const h1 = document.createElement("h1");

h1.style.color = "purple";
h1.innerText = "Testing";

div.append(h1);

//button to change the font color
const btn = document.getElementById("bbtt");
const tit = document.querySelector(".tit1");
const testing = document.querySelector("testing1");

btn.onclick = function () {
  if (btn.onclick) {
    tit.classList.toggle("tit2");
  }
};

const btn1 = document.querySelector("#btn");
btn1.addEventListener("click", () => {
  alert("Hello World!");
});

btn1.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
