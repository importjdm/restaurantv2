import Icon from "./img/chewy.jpeg";

export default function hereIsHome() {
  const header = document.createElement("h1");
  header.classList.add("home-header");

  header.innerText = "headerTEXT";

  const picture = document.createElement("img");
  picture.classList.add("home-image");

  const pageText = document.createElement("p");
  pageText.classList.add("home-text");
  pageText.innerText = "pageText";

  picture.src = Icon;

  header.append(picture);
  header.append(pageText);

  return header;
}
