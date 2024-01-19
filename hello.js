function calculate() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var operation = document.getElementById('operation').value;

    var result;

    if (operation === 'a') {
        result = num1 + num2;
    } else if (operation === 's') {
        result = num1 - num2;
    } else if (operation === 'm') {
        result = num1 * num2;
    } else {
        result = num1 / num2;
    }

    document.getElementById('result').innerText = 'Result: ' + result;
}
