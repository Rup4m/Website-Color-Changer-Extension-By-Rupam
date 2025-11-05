document.getElementById("changeColor").addEventListener("click", async () => {
  // Get the current tab
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // Inject the content script into the page
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"]
  });
});
