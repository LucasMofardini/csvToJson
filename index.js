const lib = require('./treatingFields.js');
let fs = require('fs');
let path = require('path')
let csvToJson = require('convert-csv-to-json');

let fileInputName = `./csv/${process.argv[2]}`; 
let fileOutputName = `./json/${process.argv[2]}`;

csvToJson.utf8Encoding().getJsonFromCsv(fileInputName);

let json = csvToJson.fieldDelimiter(',').getJsonFromCsv(fileInputName);

const treatingFields = (obj) => {
    let newObj = {};

    for (const property in obj){
        
        let newProperty = lib.translation(property);
        let newValue = lib.cleanValue(obj[property])

        newObj[newProperty] = newValue;
    }

    return newObj
}

json.map((item) => {
    
    return {item}
})

json = json.map(element => {
    // Object.getOwnPropertyNames(element)
    // console.log(element)
   return final = treatingFields(element);

});

json = JSON.stringify(json);

console.log(json);


fs.writeFile(fileOutputName ,json, (error)=>{
    if(error) throw error;

    console.log('Foi criado com sucesso');
})

// csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);

