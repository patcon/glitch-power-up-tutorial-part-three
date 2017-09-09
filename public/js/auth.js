var t = window.TrelloPowerUp.iframe();

t.render(function() {
  return t.sizeTo('#content');
})

var oauthUrl = window.origin + '/3rd-party/authorize.html';

var authBtn = document.getElementById('authorize');
authBtn.addEventListener('click', function() {
  t.authorize(oauthUrl)
  .then(function(token) {
    return t.set('member', 'private', 'authToken', token)
  })
  .then(function() {
    // now that the token is stored, we can close this popup
    // you might alternatively choose to open a new popup
    return t.closePopup();
  });
});