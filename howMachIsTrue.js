function howMachIsTrue(array){
    let count = 0;
    for(let el of array){
        if(el == true){
            count++;
        }
    }
    console.log(count);
}
howMachIsTrue([true, false, false, true, false, true]);


function howMachIsTrue2(array){
    let count = array.filter((el) => el == true);
    
    console.log(count.length);
}
howMachIsTrue2([true, false, true, true, false, true])