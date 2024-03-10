import hereIsAbout from "./about";
import hereIsHome from "./home";
import hereIsMenu from "./menu";
import "./style.css";

const attachToDom = document.querySelector("#content");

attachToDom.appendChild(hereIsHome());

const homeNode = hereIsHome();
const aboutNode = hereIsAbout();
const menuNode = hereIsMenu();

/*alway start at home 
when button is clicked switch tabs */

const homeButton = document.querySelector(".home-button");
const aboutButton = document.querySelector(".about-button");
const menuButton = document.querySelector(".menu-button");

//switches to the tab pressed
function switchTabs(x) {
  //get refernece to the parents first child (the one being replaced)
  let nodeToReplace = attachToDom.firstChild;
  attachToDom.replaceChild(x, nodeToReplace);
}

aboutButton.addEventListener("click", () => {
  switchTabs(aboutNode);
});

homeButton.addEventListener("click", () => {
  switchTabs(homeNode);
});

menuButton.addEventListener("click", () => {
  switchTabs(menuNode);
});
