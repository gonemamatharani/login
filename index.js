const nam = document.getElementById('form_name');
const email = document.getElementById('form_email');
const password = document.getElementById('form_password');
const arr = [];

function submitfunction(event) {
    event.preventDefault();
    console.log('hi');
    if (nam.value === "") {
        alert('Please Enter name');
    } else if (email.value === "") {
        alert('Please enter email');
    } else if (password.value === '') {
        alert('Please enter password');
    } else {
        alert(nam.value);
        arr.push({ name: nam.value, email: email.value, password: password.value });
        console.log(arr);
    }
}
console.log(arr);
