'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket, Auth) {
    this.$http = $http;
    this.awesomeThings = [];
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;  

    $http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
      socket.syncUpdates('thing', this.awesomeThings);
    });

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });  
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }

  morphThis() {
    TweenLite.to("#bicycle", 1, {morphSVG:"#motorcycle"});
  }

  morphThisBack() {
    TweenLite.to("#bicycle", 1, {morphSVG:"#bicycle"});
  }

  morphThisCoffee() {
    TweenLite.to("#coffee", 1, {morphSVG:"#coffee-new"});
  }

  morphThisCoffeeBack() {
    TweenLite.to("#coffee", 1, {morphSVG:"#coffee"});
  }
  
  morphThisGrowth() {
    TweenLite.to("#growth", 1, {morphSVG:"#growth-new"});
  }

  morphThisGrowthBack() {
    TweenLite.to("#growth", 1, {morphSVG:"#growth"});
  }
}

angular.module('daleBellesApp')
  .controller('MainController', MainController);

})();
