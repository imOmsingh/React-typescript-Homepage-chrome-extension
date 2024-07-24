// TODO: background script
chrome.runtime.onMessage.addListener((msg, sender, res) => {
  console.log(msg);
  console.log(sender);
  res("from the back");
  // TODO: on installed function
});

// console.log("background");
