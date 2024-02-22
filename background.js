chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "people_joined") {
      sendNotification("" + sender.tab.id, message.txt);
    }
  });
  

function sendNotification(notificationId, message) {
    chrome.notifications.create(notificationId, {
      type: "basic",
      title: "A user joined the call",
      message: message,
      iconUrl: "./success.png"
    });
}