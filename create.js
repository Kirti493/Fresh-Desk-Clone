const username = document.getElementById("username");
const title = document.getElementById("title");
const description = document.getElementById("desc");
const button = document.getElementById("submit");

let name = "";
let utitle = "";
let udescription = "";

username.addEventListener('change', unameupdateValue);

function unameupdateValue(e) {
  name = e.target.value;
  console.log(name)
}

title.addEventListener('change', titupdateValue);

function titupdateValue(e) {
  utitle = e.target.value;
}

description.addEventListener('change', descupdateValue);

function descupdateValue(e) {
  udescription = e.target.value;
}

const details = JSON.parse(localStorage.getItem("details")) || [];

let data = {
    userName: "",
    problemTitle: "",
    problemDescription: ""
};


button.addEventListener('click', value);
function value(e){
    e.preventDefault();
    data.userName = name;
    data.problemTitle = utitle;
    data.problemDescription = udescription;
    details.push(data);
    localStorage.setItem("details", JSON.stringify(details));
    console.log("clicked");

}


