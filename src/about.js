import Icon from "./img/chewy.jpeg";
import "./style.css";

export default function hereIsAbout() {
  const header = document.createElement("h1");
  header.classList.add("about-header");

  header.innerText = "headerTEXT";

  const picture = document.createElement("img");
  picture.classList.add("home-image");

  const pageText = document.createElement("p");
  pageText.classList.add("home-text");
  pageText.innerText = "pageText";

  picture.src = Icon;

  /******adding all the nodes together to put on the html file */

  header.append(picture);
  header.append(pageText);

  return header;
}
