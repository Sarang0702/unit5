import "./index.css";
import image from "./logan.jpg";

let root = document.getElementById("root");

let navbar=document.createElement("div");
navbar.id="navbar"

let logo =document.createElement("img");
logo.src=image;

let websiteName=document.createElement("h4");
websiteName.innerText="Webpack_Srng";

navbar.append(logo,websiteName);

root.append(navbar);

