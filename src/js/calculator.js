let buttons = document.querySelectorAll('.cal-button');
let func_buttons = document.querySelectorAll('.header-button');
let input_box = document.querySelector('.input_box');
let decimal_button = document.querySelector('.decimal-button');
const OPERATORS = ['+', '/', '-', '+'];
const high_priority = ['/', '*'];
const low_priority = ['+', '-'];

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


function calculate(eq_list) {
    // Shunting Yard Algo
    let output_queue = [];
    let operator_queue = [];

    console.log(`Eq ${eq_list}`)

    for (var i = 0; i < eq_list.length; i++) {
        let cur_char = eq_list[i];

        console.log(`cur Char ${cur_char}`)

        // It is a number push it to output stack
        if (!OPERATORS.includes(cur_char)) {
            output_queue.push(cur_char);
        } 
        // It is an operator
        else {
            while (true) {
                let top_op = operator_queue.pop()

                if (!top_op) {
                    break;
                }

                // If operator on top of queue has same precedence, pop and push it to output
                if (high_priority.includes(top_op) && high_priority.includes(cur_char)) {
                    output_queue.push(top_op);
                } 
                // If operator on top of queue has greater precedence, pop and push it to output
                else if (high_priority.includes && low_priority.includes(cur_char)) {
                    output_queue.push(top_op);
                } 
                // It does not have greater precedence
                else {
                    break;
                }
            }

            operator_queue.push(cur_char);
        }

        
    }

    output_queue.push(...operator_queue);

    console.log(output_queue);

    // let op_sequence = [];
    // let answer = eq_list.slice();


    // for (var i = 0; i < eq_list.length; i++) {
    //     if (high_priority.includes(eq_list[i])) { op_sequence.push(i) }
    // }

    // for (var i = 0; i < eq_list.length; i++) {
    //     if (low_priority.includes(eq_list[i])) { op_sequence.push(i) }
    // }

    // for (var i = 0; i < op_sequence.length; i++) {
    //     operator = "0";
    // }

    // console.log(op_sequence);
}

// Given an equation, split it into its pieces and return the calculated value
function pre_cal_check() {
    eq = input_box.innerHTML;

    let seperated_eq = eq.split(/(\+|\-|\*|\/|\%)/)
    // Remove ending delimiter
    seperated_eq = seperated_eq.filter(Boolean);

    if (is_invalid_eq(seperated_eq)) {
        input_box.innerHTML = "Invalid Equation";
    } else if (seperated_eq === undefined || seperated_eq.length == 0) {
        input_box.innerHTML = "0";
    }
    else if (seperated_eq.length == 1) {
        input_box.innerHTML = seperated_eq[0];
    } else {
        calculate(seperated_eq);
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
        pre_cal_check();
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