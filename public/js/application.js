// common functions and variables here
var errorHandling = function (error){
  noty({
    text: error.responseJSON.message,
    timeout: 3000,
    type: "error"
  })
};
