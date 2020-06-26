const data = []

function handleResponseContent() {
    console.log('enviando dados para o content...')
    chrome.tabs.query({
        active: true,
        currentWindow: true
    },
        tabs => {
            chrome.tabs.sendMessage(
                tabs[0].id,
                { from: 'background', subject: 'storeData', data });
        });
}

function renderVideoCounter(lenght) {
    chrome.browserAction.setBadgeText({ "text": lenght });
}

chrome.webRequest.onBeforeRequest.addListener(function (e) {
    const { url } = e;

    if (url) {
        data.push(url);

        const videoLinksAmount = data.length.toString()

        renderVideoCounter(videoLinksAmount)
        handleResponseContent();
    }

}, {
    urls: ["<all_urls>"],
    types: ["media"]
}, ["requestBody"]);