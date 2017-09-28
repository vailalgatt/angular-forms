import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'app';
}
  
  // (function(angular) {
  //   'use strict';
  //   angular.module('formExample', [])
  //   .controller('ExampleController', ['$scope', function($scope) {
  //     $scope.master = {};
      
  //     $scope.update = function(user) {
  //       $scope.master = angular.copy(user);
  //     };
      
  //     $scope.reset = function(form) {
  //       if (form) {
  //         form.$setPristine();
  //         form.$setUntouched();
  //       }
  //       $scope.user = angular.copy($scope.master);
  //     };
      
  //     $scope.reset();
  //   }]);
  // })(window.angular);
  