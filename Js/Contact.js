document.querySelector('.bw').addEventListener('click', function () {
    let fullname = document.querySelector('.ftext');
    let emailu = document.querySelector('.em');
    if (fullname.value.indexOf(' ') == -1) {
        alert('Full Name says : Dont forget your last name :)');
        fullname.focus();
    } else if (emailu.value.indexOf('.com') == -1 || emailu.value.indexOf('.co.il') == -1) {
        alert("Email says : Dont forget the DoT (.com / co.il)");
        emailu.focus();
    }
});