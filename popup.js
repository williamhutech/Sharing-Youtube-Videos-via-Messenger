chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  var newURL = "http://will-hu.com/youtube-messenger-extension/";
    chrome.tabs.create({ url: newURL });
});