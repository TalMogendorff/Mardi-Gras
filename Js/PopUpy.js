function myStartFunction() {
    let popup = document.querySelector('#popupwrapper');
    let close = document.querySelector('.popupClose');
    setTimeout(() => {
        popup.style.display = "block";
    }, 6000);
    close.addEventListener('click', () => {
        popup.style.display = "none";
    })
    popup.addEventListener('click', (e) => {
        if (e.target.id === "popupwrapper") {
            popup.style.display = "none";
        }
    });

}
myStartFunction();