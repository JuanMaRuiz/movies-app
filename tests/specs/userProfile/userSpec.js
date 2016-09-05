describe('Profile Test', function() {
  beforeEach(function() {
    browser.get('http://localhost:9000/#/profile');
  });

  it('should have a profile card', function() {
    var numOfItems = element.all(by.id('profile'));
  });

  it('name should be JuanMa Ruiz', function(){
    var name = element(by.id("user-name")).evaluate('userCtrl.userName');
    expect(name).toBe('JuanMa Ruiz');
  });
});