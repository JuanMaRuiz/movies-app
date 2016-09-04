'use strict';

var NavBar = function() {
  var navBarElem = element(by.id('navbar'));

  this.getUrl = function() {
    browser.get('http://localhost:9000/');
  }

  this.getNavBar = function() {
    return navBarElem;
  }
};

module.exports = NavBar;