// .then(success, error)
$(function(){
  API.getSecret().then(function(data){
    console.log("yeah! " + data)
  }, errorHandling)
});