const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnPirce = $(".pagecrm_price-btn");
const modalPrice = $(".pagecrm_price-modal");
const infoForm = $(".pagecrm_price-info");
const closeSuccess = $(".pagecrm_price-success-x");
const infoSuccess = $(".pagecrm_price-success");
const btnInfo = $(".pagecrm_price-info-submit");

window.onclick = function (e) {
    if (e.target == modalPrice) {
        modalPrice.style.display = "none";
    }
};

btnPirce.onclick = function () {
    modalPrice.style.display = "block";
    infoForm.style.display = "block";
};

closeSuccess.onclick = function () {
    modalPrice.style.display = "none";
    infoSuccess.style.display = "none";
};

infoForm.onsubmit = function (e) {
    infoSuccess.style.display = "block";
    infoForm.style.display = "none";
    return false;
};
