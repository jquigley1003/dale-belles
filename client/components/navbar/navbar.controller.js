'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  },
  {
    'title': 'About',
    'state': 'about'
  },
  {
    'title': 'What I Do',
    'state': 'whatIDo'
  },
  {
    'title': 'What I Care About',
    'state': 'whatICareAbout'
  },
  {
    'title': 'Contact',
    'state': 'contact'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('daleBellesApp')
  .controller('NavbarController', NavbarController);
