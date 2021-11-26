// LOGIN FORM

const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");


window.addEventListener("load", function() {
    setTimeout(function() {
        loginPopup.classList.add("show");
    }, 1000)

})

close.addEventListener("click", function() {
    loginPopup.classList.remove("show");
})

// LOGIN INPUT


function validateForm(e) {
    event.preventDefault();


    // Bước 1: Lấy giá trị của username và password
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var result = document.getElementById('result');

    var user = {
        email: email,
        password: password
    };

    var json = JSON.stringify(user);
    localStorage.setItem(email, json);
    console.log('user added');


    // Bước 2: Kiểm tra dữ liệu hợp lệ hay không
    if (email == '') {
        alert('Enter your email');
        return false;        
    } else if (password == '') {
        alert('Enter your passwork');
        return false;
    }
    alert('Success Login');
    return true;
}