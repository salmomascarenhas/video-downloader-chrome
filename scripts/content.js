let data = [];


chrome.runtime.onMessage.addListener((request, sender, response) => {

    switch (request.from) {
        case 'background':
            if (request.subject === 'storeData' && request.data) {
                data = request.data;
                console.log('armazenado no content com sucesso!')
            }
            break;
        case 'popup':
            if (request.subject === 'sendDataToPopUp') {
                response({ from: 'content', subject: 'dataRequested', data })
            }
        default:
            break;
    }
});