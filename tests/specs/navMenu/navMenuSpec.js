describe('Navigation menu', function() {
  var navBar;
  
  beforeEach(function() {
    navBar = require('./navBarPageObj.js');
    navBarElem = new navBar()
    navBarElem.getUrl();
  });

  it('should have a Navigation bar', function() {
    expect(navBarElem.getNavBar().isDisplayed()).toBeTruthy();
  });

  it('should have three items', function() {
    expect(navBarElem.getNavBar().all(by.tagName('li')).count()).toBe(3)
  });
});