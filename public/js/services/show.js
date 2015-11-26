$(function(){
  var id = window.location.pathname.split('/')[2];
  API.getOneService(id).then(function(data){
    var unformattedDate = new Date(data.service.createdOn)
    var formattedDate = unformattedDate.toDateString()
    $('#showOne').append('\
      <div class="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">\
        <div class="panel panel-info">\
          <div class="panel-heading">\
            <div class="panel-title text-center"><h3>I will '+ data.service.title +'</h3></div>\
          </div>\
          <div class="panel-body" >\
            <h4>'+ data.service.description +'</h4>\
            <li><span><i class="glyphicon glyphicon-calendar"></i> Created on: '+ formattedDate +' </span>\
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
