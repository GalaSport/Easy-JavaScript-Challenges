function getTheFileExtension(array){
    let resultArray = [];

    for (let i = 0; i < array.length; i++) {
        const currElement = array[i];
        let tokens = currElement.split(".");
        let extension = tokens[1]
        resultArray.push(extension);  
    }
    console.log(resultArray);
}
getTheFileExtension(["project1.jpg", "project1.pdf", "project1.mp3"]);