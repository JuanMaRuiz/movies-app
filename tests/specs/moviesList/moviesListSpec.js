describe('Movies List Test', function() {
  it('should have a lists of movies', function() {
    var numOfItems = element.all(by.css('.media'));
    browser.get('http://localhost:9000/#/list');
    
    expect(numOfItems.count()).toBe(2); 
  });
});