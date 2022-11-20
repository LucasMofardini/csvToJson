const arrTranslation  = [
    ['#CODIGO', 'Code'],
    ['DATA_INICIO', 'StartDate'],
    ['DATA_FIM', 'EndDate'],
    ['DESCRICAO', 'Description'],
]

const translation = value => {
    let valueTranslate = value;

    arrTranslation.find(item => {
       if(value == item[0]) valueTranslate = item[1];
    });

    return valueTranslate;
}

const cleanValue = value => {
    return value.replace('\"', '').replace('"','');
}

module.exports = { translation, cleanValue }