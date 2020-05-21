$.ajax({
  url: 'https://randomuser.me/api/?results=20',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    $.each(data.results, function(key,person){
      console.log(person.picture.thumbnail +' ' +person.name.first + ' ' + person.name.last + ' ' + person.nat.toLowerCase());
      var color;
      if (person.gender == "male") {
        color = "Blue";
      } else {
        color = "Pink"; }
      $('#user1').append('<div class="col-md-2" style="text-transform: lowercase; text-align: center;">'+ '<img src= " ' + person.picture.large + ' " alt="person" class="mx-auto d-block rounded-circle">' + person.name.first + ' ' + person.name.last + '<br>' + '<span class="flag-icon flag-icon-'+ person.nat.toLowerCase() +'"></span>' + '<h5 style="color:'+ color +';"><i class="fab fa-github"></i><i class="fab fa-facebook-f"></i><i class="fab fa-twitter"></i></h5>' + '</div>')
      $('#user2').append('<div class="col-md-2" style="text-transform: lowercase; text-align: center;">'+ '<img src= " ' + person.picture.large + ' " alt="person" class="mx-auto d-block rounded-circle">' + person.name.first + ' ' + person.name.last + '<br>' + '<span class="flag-icon flag-icon-'+ person.nat.toLowerCase() +'"></span>' + '<h5 style="color:'+ color +';"><i class="fab fa-github"></i><i class="fab fa-facebook-f"></i><i class="fab fa-twitter"></i></h5>' + '</div>')
    })
  }
});
