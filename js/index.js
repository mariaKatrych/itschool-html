document.querySelector('.web').addEventListener('click', openWeb);

function openWeb() {
    window.location.replace('web-development.html');
}

document.querySelector('.db').addEventListener('click', openDB);

function openDB() {
    window.location.replace('../html/database.html');
}

document.querySelector('.qa').addEventListener('click', openQA);

function openQA() {
    window.location.replace('../html/qa.html');
}

document.querySelector('.ui').addEventListener('click', openUI);

function openUI() {
    window.location.replace('../html/ui-design.html');
}