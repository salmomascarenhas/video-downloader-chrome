chrome.webRequest.onBeforeRequest.addListener(function (e) {

    console.log(e);

}, {
    urls: ["<all_urls>"],
    types: ["media"]
}, ["requestBody"]);