$(function(){
  API.getAllServices().then(function(services){
    services.forEach(function(service){
      var unformattedDate = new Date(service.createdOn)
      var formattedDate = unformattedDate.toDateString()
      $('#populateData').append('\
        <div class="well populate-each col-sm-8 col-sm-offset-2">\
          <div class="media">\
            <div class="media-body">\
              <h4 class="media-heading">\
                <a href="/services/'+ service._id +'">\
                  <i class="fa fa-quote-left"></i> '+ service.title +'\
                </a>\
              </h4>\
              <p>I will '+ service.description +'</p>\
              <ul class="list-inline list-unstyled">\
                <li><span><i class="glyphicon glyphicon-calendar"></i> Created on: '+ formattedDate +' </span></li>\
                <li>|</li>\
                <li>\
                  <i class="fa fa-clock-o"></i> ' + service.duration + ' on average</span>\
                </li>\
                <li>\
                <li>|</li>\
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
