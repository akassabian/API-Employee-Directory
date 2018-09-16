$.ajax({
  url: 'https://randomuser.me/api/?results=12&nat=ca',
  dataType: 'json',
  success: function(data) {   

    //Generate Gallery
    $.each(data.results, function(i, employee) {
        let displayPicSmall = employee.picture.medium;
        let firstName = capAsTitle(employee.name.first);
        let lastName = capAsTitle(employee.name.last);
        let email = employee.email;
        let city = capAsTitle(employee.location.city);
        let username = employee.login.username;
        
        document.getElementById("employee--container").innerHTML +=  
          `<div class="card">
            <label for="modal-${i+1}__trigger"><img class="gallery--avatar" src='${displayPicSmall}'></label>
            <div>
              <label for="modal-${i+1}__trigger"><span class="name">${firstName} ${lastName}</span><br></label>
              <span class="username">${username}</span>
              <span class="email"><a href="${email}">${email}</span><br>
              <span>${city}</span>
            </div>
          </div>`
    })

    //Generate Overlays
    $.each(data.results, function(i, employee) {
      let displayPicSmall = employee.picture.thumbnail;
      let firstName = capAsTitle(employee.name.first);
      let lastName = capAsTitle(employee.name.last);
      let email = employee.email;
      let city = capAsTitle(employee.location.city);

      let displayPicLarge = employee.picture.large;
      let cell = employee.cell;
      let street = capAsTitle(employee.location.street);
      let state = capAsTitle(employee.location.state);
      let postcode = employee.location.postcode;
      let birthday = employee.dob.date;

      document.getElementById("container").innerHTML +=
        `<div class="modal__overlay-${i+1}">
          <div class="overlay--inner">
            <span class="modal--nav">
              <label for="modal-0__trigger">X Close</label>
              <label for="modal-${i}__trigger"><</label>
              <label for="modal-${i+2}__trigger">></label>
            </span>
            <span><img class="overlay--avatar" src='${displayPicLarge}'></span>
            <p>${firstName} ${lastName}</p>
            <p><a href="mailto:${email}">${email}</a><p>
            <p>${city}</p>
            <hr>
            <p>${cell}</p>
            <p>${street}, ${state} ${postcode}<p>
            <p>Birthday: ${birthday.slice(0,-10)}</p>
          </div>     
        </div>`
        })

  }
});

function searchFilter() {
  // Variables
  var search, casing, allNames, allNames, i;
  search = document.getElementById('search');
  casing = search.value.toUpperCase();
  allNames = document.getElementsByClassName("name");
  allUserNames = document.getElementsByClassName("username")

  // Loop list items, hide any that don't match query  
  for (i = 0; i < allNames.length; i++) {
      console.log(allNames[i].innerHTML);
      console.log(allUserNames[i].innerHTML);
      if (allNames[i].innerHTML.toUpperCase().indexOf(casing) > -1 || allUserNames[i].innerHTML.toUpperCase().indexOf(casing) > -1) {              
        document.getElementsByClassName("card")[i].style.display = "";
      } else {
        document.getElementsByClassName("card")[i].style.display = "none";
      }
  }


}

function capAsTitle(string) {
  return string.replace(/\w\S*/g, function(text){
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  });
}