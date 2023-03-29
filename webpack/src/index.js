import {User} from "./User";
import "./style.css"
import csv from "./data.csv"
import xml from "./data.xml"
import img from "./img.png"
import "./sass.scss"
import $ from "jquery"
const user = new User("John", "", "");
user.sayHello();
console.log("CSV",csv);
console.log("XML",xml);

document.querySelector("img").src = img;
