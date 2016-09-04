describe('Login view', function() {
  beforeEach(function() {
    browser.get('http://localhost:9000/');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('My movies Lists');
  });

  it('should be a login', function() {
    expect($('.is-login').isDisplayed()).toBeTruthy();
  })
});
