'use strict';
var moviesPage = require('../../moviesPageObject.js');

describe('Profile Test', function() {
  var page;
  beforeEach(function () {
    page = new moviesPage();
    page.getProfilePage();
  });

  it('should have a profile card', function() {
    var numOfItems = element.all(by.id('profile'));
    expect(numOfItems.count()).toBe(1);
  });

  it('user name should be equals to alt image', function(){
    expect(page.getUserName("user-name")).toBe(page.getAltImage("image-title"));
  });
});