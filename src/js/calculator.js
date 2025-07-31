let buttons = document.querySelectorAll('.cal-button');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const isButton = event.target.nodeName === 'BUTTON';
        if (!isButton) {
            return;
        }

        update_calc(event.target.value);
    });
});




function update_calc(user_choice) {
    console.log(user_choice);
}