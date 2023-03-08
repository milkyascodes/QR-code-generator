const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');
const url = document.getElementById('url');
const submitBtn = document.getElementById('button');
const overlay = document.getElementById('overlay');


// Button Events


const onGenerateSubmit = (e) => {
    e.preventDefault()
    celarUI()

    submitBtn.disabled = true
    const urlValue = url.value;

    if (urlValue === '') {
        overlay.style.display = 'grid';
    } else {

        showSpinner()
        setTimeout(() => {
            hideSpinner()
            generateQRCode(urlValue, 240);
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

const generateQRCode = (urlValue, size) => {
    document.getElementById('image').style.display = 'none';
    document.getElementById('qrcodeContainer').style.display = 'flex';

    const qrcode = new QRCode('qrcode', {
        text: urlValue,
        width: size,
        height: size,
    })
    submitBtn.disabled = false;
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
    document.getElementById('image').style.display = 'block';
    document.getElementById('qrcodeContainer').style.display = 'none';


    const saveLink = document.getElementById('save-link');
    if (saveLink) {
        saveLink.remove()
    }



}
// close alert 

document.getElementById('close-btn').addEventListener('click', () => {
    overlay.style.display = 'none';
    submitBtn.disabled = false
})

hideSpinner();
qr.innerHTML = ''
form.addEventListener('submit', onGenerateSubmit);