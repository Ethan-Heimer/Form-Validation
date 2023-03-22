const form = document.getElementById("form")
const display = document.getElementById("display");
form.onsubmit = ValidateForm;

function ValidateForm(e){
    e.preventDefault();

    if(ValidateWord(form["First Name"].value) &&
       ValidateWord(form["Last Name"].value) &&
       ValidateEmail(form["Email"].value) &&
       ValidatePhoneNumber(form["Phone"].value) &&
       ValidateAddress(form["Address"].value) &&
       ValidateNumber(form["Zip Code"].value) &&
       ValidateNumber(form["Card Number"].value) &&
       ValidateNumber(form["CVC"].value))
    {
        display.innerHTML = "Form Is Acceptable"
    }
    else{
        display.innerHTML = "Form Is Not Acceptable";
    }
}

function ValidateWord(word){
    return word.match(/^\w+$/) !== null;
}

function ValidateNumber(number){
    return number.match(/^\d+$/) !== null;
}

function ValidatePhoneNumber(phoneNumber){
    return phoneNumber.match(/^[2-9]\d{2}-\d{3}-\d{4}$/) !== null;
}

function ValidateAddress(address){
    return address.match(/^\d+\s[NnSsEeWw]+\s[\s\w\d]+$/) !== null;
}

function ValidateEmail(email){
    return email.match(/^[\d\w.-]+[@][\d\w.-]+[\d\w.-]$/) !== null;
}