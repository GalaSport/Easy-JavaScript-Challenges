function perimeter(word, num){
    let result = 0;
    if(word == "square"){
        result = num * 4;
    }else if(word == "circle"){
        result = 6.28 * num;
    }
    console.log(result);
}
perimeter("square", 7);
perimeter("circle", 4);