const tasksInput = document.querySelector('#tasks');
const submitButton = document.querySelector('#submit-button');
const erroMessage = document.querySelector('.msg');
const items = document.querySelector('.items');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const tasksValue = tasksInput.value;

    if (tasksValue === '') {
        erroMessage.textContent = 'Please, fill out all the fields';
        erroMessage.classList = 'error';

        setTimeout(() => {
            erroMessage.textContent = "";
            erroMessage.classList = "";
        }, 2000);
        return;

    }

    const li = document.createElement("li");
    li.classList = "items";
    li.innerHTML = `Sua tarefa é ${tasksValue}`;

    items.appendChild(li);

    tasksInput.value = "";

});
