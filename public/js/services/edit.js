$(function(){

  var id = window.location.pathname.split("/")[2];
  API.getOneService(id).then(function (data){
    $('#editOneTitle').val(data.service.title);
    $('#editOneDescription').val(data.service.description);
    $('#editOneDuration').val(data.service.duration);
  }, errorHandling);

  $('#update-form').on('submit', function (e) {
    e.preventDefault();

    var params = {
      service: {
        title        : $('#editOneTitle').val(),
        description  : $('#editOneDescription').val(),
        duration     : $('#editOneDuration').val()
      }
    };

    API.editService(id, params).then(function (data) {
      window.location.href = "/services/" + data.service._id;
    }, errorHandling)
  })
});
