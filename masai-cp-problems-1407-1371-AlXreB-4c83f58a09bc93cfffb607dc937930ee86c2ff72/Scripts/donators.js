// Write code related to Donators Page
let data = JSON.parse(localStorage.getItem('Helpers'));
console.log(data);
let tbody = document.querySelector('tbody');
let row = document.querySelector('tr');
let thead = document.querySelector('th')

displayData(data);


function displayData(data) {
    data&&data.forEach(e => {
        
        let container = document.createElement('div');
    
        let formName = document.createElement('h4');
        formName.textContent = e.name
        
        let formNumber = document.createElement('h4');
        formNumber.textContent = e.phone;
        
        let formEmail = document.createElement('h4');
        formEmail.textContent = e.email;
        
        let formCategory = document.createElement('h4');
        formCategory.textContent = e.category;

        let button = document.createElement('button');
        button.textContent = "Delete"

        container.append(formName, formNumber, formEmail, formCategory, button)
        tbody.append(container)
    });
}







