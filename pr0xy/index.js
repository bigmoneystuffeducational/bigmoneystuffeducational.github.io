const form = document.querySelector('form');
const input = document.querySelector('input');

// Create iframe and navigation buttons
const iframe = document.createElement('iframe');
const backButton = document.createElement('button');
const forwardButton = document.createElement('button');

// Set up navigation buttons
backButton.textContent = 'Back';
forwardButton.textContent = 'Forward';

// Append iframe and buttons to the document body
document.body.appendChild(backButton);
document.body.appendChild(forwardButton);
document.body.appendChild(iframe);

// Event listener for the form submission
form.addEventListener('submit', async event => {
    event.preventDefault();

    // Register service worker
    window.navigator.serviceWorker.register('sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = input.value.trim();
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;

        // Set iframe source
        iframe.src = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
});

// Back button event listener
backButton.addEventListener('click', () => {
    iframe.contentWindow.history.back();
});

// Forward button event listener
forwardButton.addEventListener('click', () => {
    iframe.contentWindow.history.forward();
});

// URL validation function
function isUrl(val = '') {
    return /^http(s?):\/\//.test(val) || (val.includes('.') && val.trim()[0] !== ' ');
}
