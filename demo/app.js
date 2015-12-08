

// Get the container you want to listen on
// NOTE: By default it will listen on document.body
var phone = document.getElementById('container');
var v = new SSVelocity({ container: phone });

v.velocity(function() {
  console.log(this.velocity);
});
