    function changeBackgroundColor() {
        document.body.style.backgroundColor = '#494D5F';
    }

    function changeImage() {
        document.getElementById('taskImage').src = 'images/java.jpg';
    }
    function resetImage() {
        document.getElementById('taskImage').src = 'images/js.png';
    }

    function resetBackground() {
        document.body.style.backgroundColor = '';
    }


    function addTodo() {
        const input = document.getElementById('todoInput');
        const task = input.value;
        if (task === '') {
            alert('You must type something');
            return;
        }
        const ul = document.getElementById('todoList');
        const li = document.createElement('li');
        li.textContent = task;
        ul.appendChild(li);
        input.value = '';
    }

    function deleteLastTodo() {
        const ul = document.getElementById('todoList');
        const lastItem = ul.lastElementChild;
        if (lastItem) {
            ul.removeChild(lastItem);
        } else {
            alert('No tasks to delete');
        }
    }

    function sortNumbers(order) {
        const input = document.getElementById('numberInput').value;
        if (input === '') {
            alert('Please enter some numbers');
            return;
        }
        const numbers = input.split(',').map(Number);
        if (order === 'asc') {
            numbers.sort((a, b) => a - b);
        } else {
            numbers.sort((a, b) => b - a);
        }
        document.getElementById('sortedNumbers').textContent = numbers.join(', ');
    }


    function calculate(operation) {
        const num1 = parseFloat(document.getElementById('calcInput1').value);
        const num2 = parseFloat(document.getElementById('calcInput2').value);
        let result;
        if (operation === '+') {
            result = num1 + num2;
        } else if (operation === '-') {
            result = num1 - num2;
        } else if (operation === '*') {
            result = num1 * num2;
        } else if (operation === '/') {
            result = num1 / num2;
        }
        document.getElementById('calcResult').textContent = 'Result: ' + result;
    }


    function calculateTax() {
        const price = parseFloat(document.getElementById('priceInput').value);
        let tax;
        if (price > 10000) {
            tax = price * 0.25;
        } else if (price >= 5000 && price <= 10000) {
            tax = price * 0.20;
        } else {
            tax = price * 0.15;
        }
        document.getElementById('taxResult').textContent = 'Tax: ' + tax;
    }
