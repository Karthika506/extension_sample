function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightblue";
  }
  
  // Listen for messages from the extension popup
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === "change_color") {
      changeBackgroundColor();
    }
  });
  
  // Send a message to the extension popup when the page is loaded
  chrome.runtime.sendMessage({ message: "page_loaded" });