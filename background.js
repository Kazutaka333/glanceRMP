/*
 File name: background.js
 Description: prepare to run functions in functions.js
 */

// Date: 2017/06/17
// Author: J.W
// Description: Run functions.js when extension is clicked
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  chrome.tabs.executeScript(null, {file: "functions.js"});

});

// Date: 2017/06/17
// Author: J.W
// Description: HTTP Request preparation
chrome.runtime.onMessage.addListener(function(instructorName, sender, callback) {

  return getProfessorInfo(instructorName, sender, callback);
  
});
