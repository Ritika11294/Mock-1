// Write code related to Home Page
let formData = document.querySelector('form')

let formName = document.getElementById("name");
let formNumber = document.getElementById("phone");
let formEmail = document.getElementById("email");
let formCategory = document.getElementById("category");
let formType = document.getElementById("type");
let data = JSON.parse(localStorage.getItem('Helpers')) || [];
let dataForm = formData.addEventListener('submit', function(e) {
    e.preventDefault();

    const obj = {
        name: formName.value,
        phone: formNumber.value,
        email: formEmail.value,
        category: formCategory.value,
        type: formType.value,
    }
    data.push(obj);
    localStorage.setItem('Helpers', JSON.stringify(data));
})
    



    


    





