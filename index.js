const lib = require('./treatingFields.js');
let fs = require('fs');
let path = require('path')
let csvToJson = require('convert-csv-to-json');

// node index.js TipoCultivo.csv SK ,

let nameFile = process.argv[2];
let fileInputName = `./csv/${nameFile}`; 
let fileOutputName = `./json/${nameFile}`;

const SK = process.argv[3];
const splitType = process.argv[4] ? process.argv[4] : ','; 

csvToJson.utf8Encoding().getJsonFromCsv(fileInputName);
let json = csvToJson.fieldDelimiter(splitType).getJsonFromCsv(fileInputName);

const treatingFields = (obj) => {
    let newObj = {};

    for (const property in obj){
        
        let newProperty = lib.translation(property);
        let newValue = lib.cleanValue(obj[property])

        if(newProperty == 'Code') {
            newObj['SK'] = SK;
            newObj['PK'] = `${SK}-${newValue}`;
        }
    
        newObj[newProperty] = newValue;
    }

    return newObj
}

json = json.map(element => {
   let newJson = treatingFields(element);
   console.log(newJson)    
   return newJson; 
});

json = JSON.stringify(json);

fs.writeFile(fileOutputName ,json, (error)=>{
    if(error) throw error;

    console.log('Foi criado com sucesso em ' + fileOutputName);
})

