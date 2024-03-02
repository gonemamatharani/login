const nam = document.getElementById('form_name');
const email = document.getElementById('form_email');
const password = document.getElementById('form_password');
const name_err=document.getElementById('name_err');
const email_err=document.getElementById('email_err');
const password_err=document.getElementById('password_err');


const arr = [];

function submitfunction(event) {
    event.preventDefault();
    if((nam.value === "")&&(email.value === "")&&(password.value === '')){
        alert('Please Enter the all the fields')
        email_err.textContent='*Please Enter the email';
        name_err.textContent='*Please Enter the Name';
        password_err.textContent='*Please Enter the password';

    }else if (nam.value === "") {
        name_err.textContent='*Please Enter the Name';
        password_err.textContent='';
        email_err.textContent='';
        alert('Please Enter name');
    } else if (email.value === "") {
        name_err.textContent='';
        email_err.textContent='*Please Enter the email';
        password_err.textContent='';
        alert('Please enter email');
    } else if (password.value === '') {
        password_err.textContent='*Please Enter the password';
        email_err.textContent='';
        name_err.textContent='';
        alert('Please enter password');
    } else {
        alert(`your details logged succesfully:  ${nam.value}`);
        arr.push({ name: nam, email: email, password: password });
        console.log(arr);
    }
}
console.log(arr);
