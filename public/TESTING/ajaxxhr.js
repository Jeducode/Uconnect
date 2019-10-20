document.getElementById('button').addEventListener('click', loadData)

function loadData() {
    //Create an XHR object
    const xhr = new XMLHttpRequest();

    //OPEN
    xhr.open('GET', 'data.txt', true);

    xhr.onload = function () {
        if (this.status === 200) {
            document.getElementById('output').innerHTML = `<h2>${this.responseText} </h2>`
        }
    }

    xhr.send();
}

document.getElementById('getcustomer').addEventListener('click', loadCustomer);

//Load single Customer

function loadCustomer() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function () {
        if (this.status === 200) {
            const customer = JSON.parse(this.responseText);

            const objoutput = `
            <ul>
                <li> ${customer.id} </li>
                <li> ${customer.name} </li>
                <li> ${customer.company} </li>
                <li> ${customer.phone} </li>
            </ul>
            `;

            document.getElementById('customerdiv').innerHTML = objoutput;
        }
    }
    xhr.send();

}


// Load Customers

document.getElementById('getcustomers').addEventListener('click', loadCustomers);

function loadCustomers() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);

    xhr.onload = function () {
        if (this.status === 200) {
            const customers = JSON.parse(this.responseText);

            let output = '';
            customers.forEach(function (customer) {
                output += `
                <ul>
                <li> ${customer.id} </li>
                <li> ${customer.name} </li>
                <li> ${customer.company} </li>
                <li> ${customer.phone} </li>
            </ul>
            `;
            })

            document.getElementById('customersdiv').innerHTML = output;
        }
    }
    xhr.send();

}