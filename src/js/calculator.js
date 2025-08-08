let buttons = document.querySelectorAll('.cal-button');
let func_buttons = document.querySelectorAll('.header-button');
let input_box = document.querySelector('.input_box');
let decimal_button = document.querySelector('.decimal-button');
const OPERATORS = ['+', '/', '-', '+'];

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const isButton = event.target.nodeName === 'BUTTON';
        if (!isButton) {
            return;
        }

        update_calc(event.target.value);
    });
});

function disable_decimal() {
    decimal_button.disabled = true;
}

function enable_decimal() {
    decimal_button.disabled = false;
}


function clear_input_box() {
    input_box.innerHTML = null;
}

function is_invalid_eq(eq_list) {
    let invalid = false;

    // check if it ends on an operator
    if (OPERATORS.includes(eq_list[eq_list.length - 1])) {
        invalid = true;
    }

    return invalid;
}

// Given an equation, split it into its pieces and return the calculated value
function calculate() {
    eq = input_box.innerHTML;

    let seperated_eq = eq.split(/(\+|\-|\*|\/|\%)/)
    // Remove ending delimiter
    seperated_eq = seperated_eq.filter(Boolean);

    console.log(seperated_eq);

    if (is_invalid_eq(seperated_eq)) {
        input_box.innerHTML = "Invalid Equation";
    } else if (seperated_eq === undefined || seperated_eq.length == 0 ) {
        input_box.innerHTML = "0";
    }
    else {
        console.log('halo worlds');
    }
}


function update_calc(user_choice) {
    if (input_box.innerHTML === 'Invalid Equation') {
        clear_input_box();
    }

    let current_input = input_box.innerHTML;

    if (!isNaN(user_choice)) {
        input_box.innerHTML += user_choice.toString();
    }
    else if (user_choice === '.') {
        input_box.innerHTML += '.';
        disable_decimal();
    }
    else if (user_choice === '=') {
        calculate();
    }
    else if (user_choice === 'c' | user_choice === 'ac') {
        clear_input_box();
        enable_decimal();
    }

    // Assume it is an operator or a number
    else {
        // Allow decimal if user choice is an operator
        if (isNaN(user_choice)) {
            enable_decimal();
        }

        // Add value to input
        input_box.innerHTML += user_choice.toString();
    }

}