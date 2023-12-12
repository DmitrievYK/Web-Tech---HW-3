// Первое решение

// operand1 = parseInt(prompt('Введите первое число: '));
// operand2 = parseInt(prompt('Введите второе число: '));
// operator = prompt('Введите математический оператор Пример("+", "-", "/", "*"): ')

// function mathPhrase(operand1, operand2, operator){
//     let result;
//     switch(operator){
//         case '+':
//             result = operand1 + operand2;
//             alert(`Ваш рузультат: ${result}`);
//             break;
//         case '-':
//             result = operand1 - operand2;
//             alert(`Ваш рузультат: ${result}`);
//             break;
//         case '/':
//             result = operand1 / operand2;
//             alert(`Ваш рузультат: ${result}`);
//             break;
//         case '*':
//             result = operand1 * operand2;
//             alert(`Ваш рузультат: ${result}`);
//             break;
//         default:
//             alert("ошибка оператора!")
//     }
// }
// mathPhrase(operand1, operand2, operator)

//Второе решение
message = prompt("Напечатайте выражение через пробелы которое хотите посчитать. Пример: 2 + 2")

function findOperand(message){
    let operator = "+-/*"; //Перечень возможных операций
    let operatorIndex = -1;
    //Находим индекс оператора в строке message
    for (let i = 0; i < message.length; i++){ // двигаемся по всей длине введеного сообщения с нулевого элемента
        if (operator.indexOf(message[i]) !== -1){ // сравниваем i элемент с символами в operator (если не находит выводит -1)
            if (i === 0 && message[i] === "-") { // если нулевой элемент имеет символ "-" продолжаем поиск оператора (в строке operator)
                continue;
                }
            operator = message[i] // найденый символ в списке operator (наш знак выполняемой операции)
            operatorIndex = i; //индекс элемента
            operand1 = message.slice(0, i); // первый операнд который берется срезом по списку до нашего знака операции (не включает его) (левая часть до знака)
            operand2 = message.slice(i + 1); // второй операнд  который берется как индекс знака и все что дальше (правая часть от знака)
            break;
        }
    }
    return {
        operand1: parseFloat(operand1),
        operand2: parseFloat(operand2),
        operator: operator
    };
}
let operandsAndOperator = findOperand(message);
// Проверяем, что данные нашлись корректно
console.log(operandsAndOperator.operand1);
console.log(operandsAndOperator.operand2);
console.log(operandsAndOperator.operator);

function mathPhrase(operand1, operand2, operator){
    let result;
    switch(operator){
        case '+':
            result = operand1 + operand2;
            alert(`Ваш рузультат: ${result}`);
            break;
        case '-':
            result = operand1 - operand2;
            alert(`Ваш рузультат: ${result}`);
            break;
        case '/':
            result = operand1 / operand2;
            alert(`Ваш рузультат: ${result}`);
            break;
        case '*':
            result = operand1 * operand2;
            alert(`Ваш рузультат: ${result}`);
            break;
        default:
            alert("ошибка оператора!")
    }
}
mathPhrase(operandsAndOperator.operand1, operandsAndOperator.operand2, operandsAndOperator.operator);



