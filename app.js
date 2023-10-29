
// Inputs
const dayip = document.getElementById("dayip");
const monthip = document.getElementById("monthip");
const yearip = document.getElementById("yearip");

// Outputs
const dayop = document.getElementById("DD");
const monthop = document.getElementById("MM");
const yearop = document.getElementById("YY");

const form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() 
{
    const inputs = document.querySelectorAll("input");
    let validator = true;
    inputs.forEach((i) => {
        const parent = i.parentElement;
        if (!i.value) {
            i.style.borderColor = "red";
            parent.querySelector("small").innerText = "This field is required";
            validator = false;
        } else {
            i.style.borderColor = "black";
            parent.querySelector("small").innerText = "";
        }
    });

    if (monthip.value < 1 || monthip.value > 12) {
        monthip.style.borderColor = "red";
        monthip.parentElement.querySelector("small").innerText = "Must be a valid month";
        validator = false;
    }

    if (dayip.value < 1 || dayip.value > months[month - 1]) {
        dayip.style.borderColor = "red";
        dayip.parentElement.querySelector("small").innerText = "Must be a valid day";
        validator = false;
    }

    return validator;
}

function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
        if (dayip.value > day)
        {
            day = day + months[month - 1];
            month = month - 1;
        }
        if (monthip.value > month) 
        {
            month = month + 12;
            year = year - 1;
        }
        const d = day - dayip.value;
        const m = month - monthip.value;
        const y = year - yearip.value;

        dayop.innerHTML = d;
        monthop.innerHTML = m;
        yearop.innerHTML = y;
    }
}

