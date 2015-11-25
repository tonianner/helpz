$(function(){
  var id = window.location.pathname.split('/')[2];
  API.getOneService(id).then(function(data){
    $('#showOne').append('\
      <div class="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">\
        <div class="panel panel-info">\
          <div class="panel-heading">\
              <div class="panel-title text-center"> '+ data.service.title +'</div>\
          </div>\
          <div class="panel-body" >\
            <h3>'+ data.service.description +'</h3>\
          </div>\
        </div>\
      </div>\
    </div>\
    ')
  })
})


