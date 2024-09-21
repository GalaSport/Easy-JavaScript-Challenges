function tileTemworkTactics(pos1, pos2){
    if(pos2 - pos1 <= 6 && pos2 - pos1 > 0){

        console.log("true");  
    }
    if(pos2 - pos1 > 6){
        console.log("false");
        
    }
    if(pos2 <= pos1){
        console.log("false");  
    }
}
tileTemworkTactics(3, 7); //true
tileTemworkTactics(1, 9); //false
tileTemworkTactics(5, 3); //false//