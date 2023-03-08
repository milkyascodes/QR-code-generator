const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');


// Button Events

document.getElementById('button').addEventListener('click', () => {
    celarUI()
    document.getElementById('button').disabled = true;
})

const onGenerateSubmit = (e) => {
    e.preventDefault()
    celarUI()
    const url = document.getElementById('url').value;


    if (url === '') {
        alert('Please enter a url')
    } else {
        showSpinner()
        setTimeout(() => {
            hideSpinner()
            generateQRCode(url, 240);
            setTimeout(() => {
                const saveUrl = qr.querySelector('img').src;
                createSaveButton(saveUrl)
            }, 50);
        }, 1000);
    }
}

const createSaveButton = (saveUrl) => {
    const link = document.createElement('a');
    link.id = 'save-link';
    link.classList = 'bg-red-500 hover:bg-red-700 text-white text-center font-bold py-2 rounded w-full m-auto my-5'
    link.href = saveUrl;
    link.download = 'qrcode';
    link.innerHTML = 'Download Image'
    document.getElementById('qrcodeContainer').appendChild(link);
}

// QR Code

const generateQRCode = (url, size) => {
    document.getElementById('image').style.display = 'none';
    document.getElementById('qrcodeContainer').style.display = 'flex';

    const qrcode = new QRCode('qrcode', {
        text: url,
        width: size,
        height: size,
    })
    document.getElementById('button').disabled = false;

}

// UI functionality

const showSpinner = () => {
    document.getElementById('spinner').style.display = 'grid';
    document.getElementById('qrcodeContainer').style.display = 'none';
    document.getElementById('image').style.display = 'none';
}

const hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none';
    document.getElementById('image').style.display = 'block';
}

const celarUI = () => {
    qr.innerHTML = ''
    const saveLink = document.getElementById('save-link');
    if (saveLink) {
        saveLink.remove()
    }

}

hideSpinner();
qr.innerHTML = ''

form.addEventListener('submit', onGenerateSubmit);