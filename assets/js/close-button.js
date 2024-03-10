document.addEventListener("click", function (event) {
    if(event.target.classList.contains('close-button')) {
        event.target.closest('.promo').remove()
    }
});
