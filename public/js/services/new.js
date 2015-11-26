$(function(){
  $('#createForm').on('submit', function(e){
    e.preventDefault();

    var params = {
      service: {
         title:       $('#createOneTitle').val(),
         description: $('#createOneDescription').val(),
         duration:    $('#createOneDuration').val()
      }
    };

    API.createOneService(params).then(function(data){
      window.location.href = "/services/" + data.service._id;
    }, errorHandling);
  })
})
