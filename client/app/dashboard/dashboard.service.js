'use strict';

angular.module('fitStatsApp')

.factory('FormFunctions', function($filter, $resource, $injector){



  var submit = function(formData, field, decimals, userId) {
    debugger;
    //var $http = $injector.get("$http");

    var data = $filter('number')(formData, decimals);
    var date = new Date();                                          // ∆ need filter.

    // ****************************************
    // ******** simple GET request ************
    /*
    var Weight = $resource('/api/fitnessData/weight');
    var weight = new Weight();
    Weight.get();                                          // weight.$save()
    */
    /*
    var User = $resource('/api/fitnessData/weight', {});
    var user = User.get({}, function(data) {
      user.$save();
      console.log('data:', data);
    });
    */



    // ****************************************
    // ******** simple PUT request ************

    var Weight = $resource('/api/fitnessData/weight', {},
      {
          'update': {
          method: 'PUT',
          isArray: false
        }
      });
    var weightData = new Weight();
        //weight.$save()
    weightData.weight = formData;
    weightData.$update({}, function (data) {
      debugger;
      console.log('weight data posted');
    });


  };

  return {
    submit: submit,
  };
});
