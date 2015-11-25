$(function(){
  var id = window.location.pathname.split('/')[2];
  API.getOneService(id).then(function(data){
    $('#showOne').append('\
      <div class="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">\
        <div class="panel panel-danger">\
          <div class="panel-heading">\
            <div class="panel-title text-center"><h3>'+ data.service.title +'</h3></div>\
          </div>\
          <div class="panel-body" >\
            <h4>'+ data.service.description +'</h4>\
            <li><span><i class="glyphicon glyphicon-calendar"></i> Created on: '+ data.service.createdOn +' </span>\
            </li>\
            <li>\
              <i class="fa fa-user"></i> by ' + data.service.createdBy + ' </span>\
            </li>\
            <li>\
              <i class="fa fa-clock-o"></i> ' + data.service.duration + ' on average</span>\
            </li>\
          </div>\
        </div>\
      </div>\
    </div>\
    ')
  })
})


