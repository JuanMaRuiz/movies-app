describe('Bazinga Demo App', function() {
  it('should have a title', function() {
    browser.get('http://localhost:9000/');
    expect(browser.getTitle()).toEqual('My movies Lists');
  });

  it('should be a login', function() {
    expect($('.is-login').isDisplayed()).toBeTruthy();
  })
});
