function sendMessageToContentScript(message) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, message);
    });
  }
  
  // Handle the button click event
  document.getElementById("changeColorButton").addEventListener("click", function () {
    sendMessageToContentScript({ message: "change_color" });
  });
  
  // Listen for messages from the content script
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === "page_loaded") {
      sendMessageToContentScript({ message: "change_color" });
    }
  });