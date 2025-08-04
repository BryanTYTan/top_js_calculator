let buttons = document.querySelectorAll('.cal-button');
let func_buttons = document.querySelectorAll('.header-button');
let input_box = document.querySelector('.input_box');
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
    else if (user_choice === 'del' && current_input !== '') {
        new_input = input_box.innerHTML.slice(0, -1);
        input_box.innerHTML = current_input;
    }
    else if (user_choice === "+") {
        if (current_input !== '' && cache_input !== '') {
            // Convert them to numbers and store them
        }
        // Store current value into cache
        cache_input = current_input;
        clear_input_box();
    }



    else if (user_choice === 'c' && current_input !== '') {
        clear_input_box();
    }
    else if (user_choice === 'ac' && current_input !== '') {
        all_clear();
    }
    
    


    
}