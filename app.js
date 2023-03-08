const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e) => {
    e.preventDefault()
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
        }, 1000);
    }
}

const showSpinner = () => {
    document.getElementById('spinner').style.display = 'grid';
    document.getElementById('image').style.display = 'none';
}

const hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none';
    document.getElementById('image').style.display = 'block';
}

hideSpinner();
form.addEventListener('submit', onGenerateSubmit);