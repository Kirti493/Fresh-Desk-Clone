const details = JSON.parse(localStorage.getItem("details"));
console.log(details)
const view = document.getElementById("view");

let html = '';
details.forEach(detail => {
    html += `
    <div class="col-md-12">
    <div class="my-2 p-3">
      <div class="row">
        <div class="col-md-3">
        <img src="user1.PNG" alt="user1" id="user">
      </div>
      <div class="col-md-9">
        <p id="line">User Name: ${detail.userName}</p>
        <p id="line">Title: ${detail.problemTitle}</p>
        <p id="line">Description: ${detail.problemDescription}</p>
        <span class="material-icons" id="edit">
          edit
        <span class="material-icons" id="cancel">
          cancel
          </span>
        </span>
      </div>
      </div>
    </div>
  </div>
    `
})

view.innerHTML = html;