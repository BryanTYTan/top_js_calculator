let buttons = document.querySelectorAll('.cal-button');
let func_buttons = document.querySelectorAll('.header-button');
let input_box = document.querySelector('.input_box');
let decimal_button = document.querySelector('.decimal-button');

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
    input_box.innerHTML = '';
}

function all_clear() {
    input_box.innerHTML = '';
    cache_input = '';
}

// Given an equation, split it into its pieces and return the calculated value
function calculate() {
    eq = input_box.innerHTML;

    seperated_eq = eq.split(/(\+|\-|\*|\/|\%)/)


    console.log(seperated_eq);
}


function update_calc(user_choice) {
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
    else if (user_choice === 'c' && current_input !== '') {
        clear_input_box();
        enable_decimal();
    }
    else if (user_choice === 'ac' && current_input !== '') {
        all_clear();
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