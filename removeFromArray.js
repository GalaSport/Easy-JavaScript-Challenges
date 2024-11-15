function removeFromArray(array){

    let propertyName = "name";
    let propertyValue = "Sara";
    
    let newArray = array.filter(obj => obj[propertyName] !== propertyValue);


    console.log(newArray);

}

removeFromArray([{name: "Mata", age: 7},
    {name: "Sara", age: 3},{name: "Ares", age: 4}])