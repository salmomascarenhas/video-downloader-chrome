let data = [];

document.addEventListener('DOMContentLoaded', () => {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, tabs => {
        // alert('dados solicitado do content com sucesso!')
        chrome.tabs.sendMessage(
            tabs[0].id,
            { from: 'popup', subject: 'sendDataToPopUp' },
            anyfunction);
    });
});

function anyfunction(request) {
    if (request.from === 'content' && request.subject === 'dataRequested') {
        const container = document.querySelector('.container');
        data = request.data;

        if (!data) {
            console.log('sem data');
            container.innerHTML +=
                `<h2>TESTE</h2>`
        }
        data.forEach((element, index) => {
            container.innerHTML +=
                `<div class='card'>
                    <a href="${element}" target="_blank">link ${index}</a>
                </div>`;

        });
    }
}