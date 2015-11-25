// common functions and variables here
var errorHandling = function (error){
  console.log(error)
  alert('API ERROR: ' + error.responseJSON.message)
}