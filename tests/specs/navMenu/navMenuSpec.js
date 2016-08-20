describe('Navigation menu', function() {
  var navBar;

  beforeEach(function() {
    navBar = element(by.id('navbar'));
    browser.get('http://localhost:9000/');
  });

  it('should have a Navigation bar', function() {
    expect(navBar.isDisplayed()).toBeTruthy();
  });

  it('should have three items', function() {
    expect(navBar.all(by.tagName('li')).count()).toBe(3)
  });
});