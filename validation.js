function formValidation() {
    
    var userName = document.registration.username;
    var title = document.registration.title;
    var description = document.registration.description;

    {
      if (allLetterName(userName)) {
        if (alphanumericAddress(title)) {
          if (alphanumericAddress(description)) {
           
          }
        }
      }
    }
  
    return false;
  }
  
  // UserName
  function allLetterName(uname) {
    console.log('called function');
    var letters = /^[A-Za-z]+$/;
    if (uname.value.match(letters)) {
      return true;
    } else {
      alert('Username must have alphabet characters only');
      uname.focus();
      return false;
    }
  }
  
  // Title
  function allLetterState(title) {
    var letters = /^[A-Za-z]+$/;
    if (title.value.match(letters)) {
      return true;
    } else {
      alert('Title must have alphabet characters only');
      title.focus();
      return false;
    }
  }
  
  // Description
  function allLetterCity(description) {
    var letters = /^[A-Za-z]+$/;
    if (description.value.match(letters)) {
      return true;
    } else {
      alert('Description must have alphabet characters only');
      description.focus();
      return false;
    }
  }
  
  
  

  