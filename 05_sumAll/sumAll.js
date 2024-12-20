const sumAll = function(number1,number2) {
    let answer = 0;

    if (number1 !== Number){
        return "ERROR"
    }
    
    if (number2 !== Number){
        return "ERROR"
    }

    if (number1<0 || number1!=Number(number1)|| number1%1!=0){
        return "ERROR"
    }

    if (number2<0 || number2!==Number(number2)|| number1%1!=0){
        return "ERROR"
    }

    if (number1<number2) {
        for (let i = number1; i<=number2;i++){
            answer+=i
        }
        return answer
    }
    if (number1>number2) {
        for (let i = number2; i<=number1;i++){
            answer+=i
        }
        return answer
    }

};

// Do not edit below this line
module.exports = sumAll;
