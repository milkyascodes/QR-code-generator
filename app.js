const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

document.getElementById('button').addEventListener('click', () => {
    console.log('before', qr.innerHTML);
    celarUI()
    document.getElementById('button').disabled = true;
})

const onGenerateSubmit = (e) => {
    e.preventDefault()
    celarUI()
    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    console.log('url', url);
    console.log('size', size);

    if (url === '') {
        alert('Please enter a url')
    } else {
        showSpinner()
        setTimeout(() => {
            hideSpinner()
            generateQRCode(url, size)
        }, 1000);
    }
}


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
    console.log('after', qr.innerHTML);
}

hideSpinner();
qr.innerHTML = ''

form.addEventListener('submit', onGenerateSubmit);