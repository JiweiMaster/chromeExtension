chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log("The color is green.");
    });

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [
            new chrome.declarativeContent.PageStateMatcher({
              //制定扩展程序生效的界面
              pageUrl: {hostEquals: 'www.baidu.com'},
            })
          ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });



});