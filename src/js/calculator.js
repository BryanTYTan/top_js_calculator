let buttons = document.querySelectorAll('.cal-button');
let func_buttons = document.querySelectorAll('.header-button');
let input_box = document.querySelector('.input_box');
let decimal_button = document.querySelector('.decimal-button');
let cache_input = '';

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

function update_calc(user_choice) {
    let current_input = input_box.innerHTML;

    if (!isNaN(user_choice)) {
        input_box.innerHTML += user_choice.toString();
    }
    else if (user_choice === '.') {
        input_box.innerHTML += '.';
        disable_decimal();
    }
    else if (user_choice === "+") {
        if (current_input === '') {
            ;
        }
        else if (current_input !== '' && cache_input !== '') {
            // Convert them to numbers and store them
            let new_num = parseFloat(current_input) + parseFloat(cache_input);

            cache_input = new_num.toString();
            input_box.innerHTML = cache_input;
        }
        else {
            // Store current value into cache
            cache_input = current_input;
            clear_input_box();
            enable_decimal();
        }
    }
    else if (user_choice === '=') {
        if (current_input === '') {
            cache_input = 0;
            input_box.innerHTML = cache_input.toString();
        }
    }
    else if (user_choice === 'c' && current_input !== '') {
        clear_input_box();
        enable_decimal();
    }
    else if (user_choice === 'ac' && current_input !== '') {
        all_clear();
        enable_decimal();
    }
}