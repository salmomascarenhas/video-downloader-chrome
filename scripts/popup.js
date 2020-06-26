let data = [];


function anyfunction(request) {
    if (request.from === 'content' && request.subject === 'dataRequested') {
        data = request.data;
        alert('dados armazenados no popup com sucesso!');
        alert(data);
    }
}

document.querySelector('#btn').addEventListener('click', () => {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, tabs => {
        alert('dados solicitado do content com sucesso!')
        chrome.tabs.sendMessage(
            tabs[0].id,
            { from: 'popup', subject: 'sendDataToPopUp' },
            anyfunction);
    });
});