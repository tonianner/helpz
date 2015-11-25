$(function(){
  API.getAllServices().then(function(services){
    services.forEach(function(service){
      $('#populateData').append('\
        <div class="well populate-each">\
          <div class="media">\
            <div class="media-body">\
              <h4 class="media-heading">\
                <a href="/services/'+ service._id +'">\
                  <i class="fa fa-quote-left"></i> '+ service.title +'\
                </a>\
              </h4>\
              <p>'+ service.description +'</p>\
              <ul class="list-inline list-unstyled">\
                <li><span><i class="glyphicon glyphicon-calendar"></i> Created on: '+ service.createdOn +' </span></li>\
                <li>|</li>\
                  <i class="fa fa-user"></i> by ' + service.createdBy + ' </span>\
                <li>|</li>\
                <li>\
                  <i class="fa fa-clock-o"></i> ' + service.duration + ' on average</span>\
                </li>\
                <br>\
                <li>\
                <br>\
                </li>\
                <li>\
                  <a href="/services/'+service._id+'/edit">\
                    <i class="fa fa-pencil"></i> Edit Post\
                  </a>\
                </li>\
              </ul>\
            </div>\
          </div>\
        </div>\
      ');
    }, errorHandling)
  })
})
