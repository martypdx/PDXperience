(function(module) {

  var poiController = {};

  // call the GET all
  poiController.getAll = function() {
    console.log('the poi controller was called');

    var promise = $.getJSON('/api');

    promise
      .done(function (data) {
        console.log('heres the data', data);
        $('#testdiv').append(data);
      })
      .fail(function () {
        $('#testdiv').append('<p>Oh no, something went wrong!</p>');
      });
  }


  module.poiController = poiController;

})(window);