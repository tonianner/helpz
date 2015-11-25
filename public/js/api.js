// library
var API_WRAPPER = function () {
  this.URL_BASE = window.location.origin

  this.getSecret = function (){
    return $.ajax({
      url:    this.URL_BASE + "/secret",
      method: "GET"
    })
  }

  // get all articles
  this.getAllServices = function(){
    return $.ajax({
      url:  this.URL_BASE + '/api/helpz',
      method: 'GET'
    });
  }

  this.getOneService = function(id){
    return $.ajax({
      url:  this.URL_BASE + '/api/helpz/' + id,
      method: 'GET'
    })
  }

  // this.bindDelete = function(id){
  //   var elem = $(this).parent();
  //   return $.ajax({
  //     url:  this.URL_BASE + '/api/helpz/' + id,
  //     method: 'DELETE'
  //   })
  // }

  this.createOneService = function(params){
    var settings = {
      url: this.URL_BASE + '/api/helpz',
      method: 'POST',
      data: params
    }
    var request = $.ajax(settings);
      return request;
  }

};

var API = new API_WRAPPER();
