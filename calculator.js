function calculator(num1, num2, sign){
    let result;
    if(sign == "+"){
        result = num1 + num2;
    }else if(sign == "-"){
        result = num1 - num2;

    }else if(sign == "*"){
        result = num1 * num2;
    }else if(sign == "/"){
        result = num1 / num2;
    }
    console.log(result);
    
}
//calculator(25, 40, "+");
//calculator(0, 0, "-");
calculator(38, 15, "*");
//calculator(0, 0, "/");