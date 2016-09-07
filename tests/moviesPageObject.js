var moviesPage = function() {
  this.getProfilePage = function() {
    browser.get('http://localhost:9000/#/profile');
  }

  this.getUserName = function(locator) {
    var name = element(by.id(locator)).getAttribute("data-name").evaluate('userCtrl.userName');
    return name;
  };

  this.getAltImage = function(locator) {
    var altImage = element(by.id(locator)).getAttribute("alt").then(function(value) {
      return value;
    });
    return altImage;
  };
}

module.exports = moviesPage;