let num1 = parseFloat(prompt("Enter First Number: "));
let num2 = parseFloat(prompt("Enter Sedond Number: "));
let op = prompt("Enter Operator(+, -, *, /): ");

switch(op){
    case ('+'):
        console.log("Result: " num1 + num2);
    break;

    case ('-'):
        console.log("Result: " num1 - num2);
    break;

    case ('*'):
        console.log("Result: " num1 * num2);
    break;

    case ('/'):
        if(num2 != 0){
            console.log("Result: " num1 * num2);
        }
        else{
            console.log("Cannot divide By Zero")
        }
    break;

    default:
        console.log("ERROR");
}