$.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: function(data) {
    
    console.log(data.results[0].name.first);

    $.each(data.results, function(i, employee) {
        let displayPicSmall = employee.picture.thumbnail;
        let firstName = employee.name.first;
        console.log(firstName)
        let lastName = employee.name.last;
        let email = employee.email;
        let city = employee.location.city;

        let displayPicLarge = employee.picture.large;
        let cell = employee.cell;
        let street = employee.location.street;
        let state = employee.location.state;
        let postcode = employee.location.postcode;
        let birthday = employee.dob.date;

        if (i == 0 || i ==3 || i==6 || i==9){
          console.log('start of row');
          document.getElementById("employee--container").innerHTML +=  
              `
              <div class="grid__col--4 card">
                <label for="modal-${i+1}__trigger"><img class="avatar" src='${displayPicSmall}'></label>
                <div>
                  <span>${firstName} ${lastName}</span><br>
                  <span><a href="${email}">${email}</span><br>
                  <span>${city}</span>
                </div>
              </div>`
        }

        else if (i == 1 || i ==4 || i==7 || i==10){
          document.getElementById("employee--container").innerHTML += 
          `<div class="grid__col--4 card">
          <label for="modal-${i+1}__trigger"><img class="avatar" src='${displayPicSmall}'></label>
            <div>
              <span>${firstName} ${lastName}</span><br>
              <span><a href="${email}">${email}</span><br>
              <span>${city}</span>
            </div>
          </div>`
        }

        else if (i == 2 || i ==5 || i==8 || i==11){
          document.getElementById("employee--container").innerHTML += 
          `<div class="grid__col--4 card">
          <label for="modal-${i+1}__trigger"><img class="avatar" src='${displayPicSmall}'></label>
            <div>
              <span>${firstName} ${lastName}</span><br>
              <span><a href="${email}">${email}</span><br>
              <span>${city}</span>
            </div>
          </div>
          `
        }


        


    })

    //Generate Overlays
    $.each(data.results, function(i, employee) {
      let displayPicSmall = employee.picture.thumbnail;
      let firstName = employee.name.first;
      console.log(firstName)
      let lastName = employee.name.last;
      let email = employee.email;
      let city = employee.location.city;

      let displayPicLarge = employee.picture.large;
      let cell = employee.cell;
      let street = employee.location.street;
      let state = employee.location.state;
      let postcode = employee.location.postcode;
      let birthday = employee.dob.date;

      document.getElementById("container").innerHTML +=
      `<div class="modal__overlay-${i+1}">
        <label for="modal-0__trigger">X Close</label>
        <label for="modal-${i}__trigger"><</label>
        <label for="modal-${i+2}__trigger">></label>
        <p>modal content</p>
      </div>`
    })

  }
});