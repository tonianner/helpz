$(function(){
  $('#createService').on('click', function(e){
    e.preventDefault();
    // var title       = $('#createOneTitle').val();
    // var description = $('#createOneDescription').val();
    // var duration    = $('#createOneDuration').val();

    var params = {
      service: {
         title:       $('#createOneTitle').val(),
         description: $('#createOneDescription').val()
         // duration:    duration,
      }
    };

    API.createOneService(params).then(function(data){
      window.location.href = "/services/" + data.service._id;
    }, errorHandling);
  })
})
