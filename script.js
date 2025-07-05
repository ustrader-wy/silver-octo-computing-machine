// Cleaned and simplified script version

function showLoader() {
    const loader = document.querySelector('#loader');
    loader.innerHTML = '<div>PLEASE WAIT...</div>';
    loader.style = 'border:none;outline:none;margin:auto;padding:5px;';
    loader.showModal?.();
    setTimeout(() => hideLoader(), 8000);
}

function hideLoader() {
    const loader = document.querySelector('#loader');
    loader.close?.();
}

document.addEventListener("DOMContentLoaded", () => {
    showLoader();
    hideLoader();
});
