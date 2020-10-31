function formValidation() {
    
    var userName = document.registration.username;
    var title = document.registration.title;
    var description = document.registration.description;

    {
      if (allLetterName(userName)) {
        if (alphanumericTitle(title)) {
          if (alphanumericDescription(description)) {
           
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
  function alphanumericTitle(title) {
    var letters = /^[0-9a-zA-Z]+$/;
    if (title.value.match(letters)) {
      return true;
    } else {
      alert('Title must have alphanumeric characters only');
      title.focus();
      return false;
    }
  }
  
  // Description
  function alphanumericDescription(description) {
    var letters = /^[0-9a-zA-Z]+$/;
    if (description.value.match(letters)) {
      return true;
    } else {
      alert('Description must have alphanumeric characters only');
      description.focus();
      return false;
    }
  }
  
  
  

  