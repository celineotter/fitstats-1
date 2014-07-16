'use strict';

angular.module('fitStatsApp')

.factory('FormFunctions', function($filter, $resource, $injector){

  var submit = function(formData, field, decimals, userId) {
    //var $http = $injector.get("$http");
    debugger;

    var data = $filter('number')(formData, decimals);
    var date = new Date();

    //this.today.$child(field).$set(data);    // ∆ error $child
    //this.inputMode = false;

    //=========//
    //$resource('/api/fitnessData/:userId/:date/field', {
    // var Weight = $resource('/api/fitnessData/weight');
    // Weight.get().then(function(data) {
    //   console.log('∆∆∆∆∆∆')
    // });
    //})

    //=========//
    // var fitData = $resource('/api/fitnessData/weight', {}, {
    //   updateWeight: {method: 'put', isArray: false},
    // });
    // return fitData;

    //=========//
    // $resource('/api/fitnessData/weight', {},
    //   { save:
    //     {
    //       method:'PUT', transform: function (data) {
    //         console.log('data:', data);
    //         return JSON.stringify(data);
    //       }
    //     }
    //   });



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

    // $http({
    //   data: {weight : data},
    //   method: 'PUT',
    //   url: 'api/fitnessData/weight'
    // })
    // .success(function(data, status, headers, config) {
    //   console.log('test success')
    // })
    // .error(function(data, status, headers, config) {
    //   console.log('test fail')
    // });

    // ****************************************
    // ******** simple PUT request ************

    var Weight = $resource('/api/fitnessData/weight', {},
      {
        'update': {
         method: 'PUT',
         params: {}
        }
      });
      var weight = new Weight();
          //weight.$save()
      weight.$update();


  };

  return {
    submit: submit,
  };
});
