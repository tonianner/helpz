// common functions and variables here
var errorHandling = function (error){
  noty({
    text: error.responseJSON.message,
    timeout: 3000,
    type: "error",
    animation: {
      open: 'animated bounceInDown', // Animate.css class names
      close: 'animated bounceOutLeft', // Animate.css class names
      easing: 'swing', // unavailable - no need
      speed: 500 // unavailable - no need
    }
  })
};
