$.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: function(data) {
    
    //console.log(data.results[0].name.first);

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
    })



  }
});