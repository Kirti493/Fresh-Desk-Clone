let details = JSON.parse(localStorage.getItem("details"));
console.log(details)
const view = document.getElementById("view");



const removeCard = (id) => {
    console.log('Getting the Card id')
    console.log(id)
    let updatedDetails = []
    details.forEach((detail)=>{
      if(detail.userID === id){
        details = details.splice(id-1,1);
        localStorage.setItem("details", JSON.stringify(details));
        window.location.reload()

      }else{
        updatedDetails.push(detail)
      }
    })
    console.log("Updated Details",updatedDetails)
}




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
        <p id="line">User ID: ${detail.userID}</p>
        <p id="line">User Name: ${detail.userName}</p>
        <p id="line">Title: ${detail.problemTitle}</p>
        <p id="line">Description: ${detail.problemDescription}</p>
        <span class="material-icons" id="edit" >
          edit
        <span class="material-icons" id="cancel" onclick="removeCard(${detail.userID})" >
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