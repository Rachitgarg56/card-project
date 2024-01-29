
window.onload = () => {

    const fNameInput = document.querySelector('#fName');
    const lNameInput = document.querySelector('#lName');
    const countryInput = document.querySelector('#country');
    const phoneInput = document.querySelector('#phone');
    const stateInput = document.querySelector('#state');
    const cityInput = document.querySelector('#city');
    const villageInput = document.querySelector('#village');

    if (localStorage.length > 1) {
        fNameInput.value = localStorage.getItem('fName');
        lNameInput.value = localStorage.getItem('lName');
        countryInput.value = localStorage.getItem('country');
        phoneInput.value = localStorage.getItem('phone');
        stateInput.value = localStorage.getItem('state');
        cityInput.value = localStorage.getItem('city');
        villageInput.value = localStorage.getItem('village');
        return;
    }

    const fName = prompt('Enter your First name:');
    const lName = prompt('Enter your Last name:');
    const country = prompt('Enter your Country:');
    const phone = prompt('Enter your Phone number:');
    const state = prompt('Enter your State:');
    const city = prompt('Enter your City:');
    const village = prompt('Enter your Village:');

    localStorage.setItem('fName',fName);
    localStorage.setItem('lName',lName);
    localStorage.setItem('country',country);
    localStorage.setItem('phone',phone);
    localStorage.setItem('state',state);
    localStorage.setItem('city',city);
    localStorage.setItem('village',village);

    fNameInput.value = localStorage.getItem('fName');
    lNameInput.value = localStorage.getItem('lName');
    countryInput.value = localStorage.getItem('country');
    phoneInput.value = localStorage.getItem('phone');
    stateInput.value = localStorage.getItem('state');
    cityInput.value = localStorage.getItem('city');
    villageInput.value = localStorage.getItem('village');

};

