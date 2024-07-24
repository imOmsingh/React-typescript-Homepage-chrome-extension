// TODO: content script
chrome.runtime.sendMessage("from content", (res) => {
  console.log(res);
});
