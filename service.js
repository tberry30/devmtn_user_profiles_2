var app = angular.module('userProfiles')
    .service('mainService', function($http) {

  this.getUsers = function(page) {
    return $http({
        method: 'GET',
        url: 'http://reqres.in/api/users?page=' + page
    });

  };

});