const username = document.getElementById("username");
const title = document.getElementById("title");
const description = document.getElementById("desc");
const button = document.getElementById("submit");

const details = JSON.parse(localStorage.getItem("details")) || [];
console.log('Getting Details ',details)

let primaryKey = 1

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



let data = {
    userID: "",
    userName: "",
    problemTitle: "",
    problemDescription: ""
};

button.addEventListener('click', value);
function value(e){
    e.preventDefault();


    if(details.length <1){
      console.log('Entering Main Case')
      data.userID = 0;
    }

    else if(details.length >=1){
      console.log('Entering Case')
      data.userID = details[details.length-1].userID + 1
    }


    data.userName = name;
    data.problemTitle = utitle;
    data.problemDescription = udescription;

    console.log("Local Storage Details are: ",details)
    details.push(data);

    console.log(data);

    // Update the Local Storage

    localStorage.setItem("details", JSON.stringify(details));
    console.log("clicked");

    alert('Raised Ticket Successfully :)')

    setTimeout(() => {
      window.location.reload()
    }, 500);





}


