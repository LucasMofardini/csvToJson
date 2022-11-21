const arrTranslation  = [
    ['#CODIGO', 'Code'],
    ['#COD_MUNICIPIO_CADMU', 'Code'],
    ['#CODIGO_SUBPROGRAMA', 'Code'],
    ['DATA_INICIO', 'StartDate'],
    ['DATA_FIM', 'EndDate'],
    ['DESCRICAO', 'Description'],
    ['DESCRICAO_SUBPROGRAMA', 'Description'],
    ['FINALIDADE', 'Finality'],
    ['ATIVIDADE', 'Activity'],
    ['PRODUTO', 'Product'],
    ['VARIEDADE','Varietity'],
    ['ZONEAMENTO','Zoning'],
    ['UNIDADE_MEDIDA','UnitOfMeasurement'],
    ['UNIDADE_MEDIDA_PREVISAO','ForecastUnitOfMeasure'],
    ['CONSORCIO','Consortium'],
    ['CESTA', 'Basket'],
    ['CEDULA_MAE','BankCreditNote'],
    ['CD_TIPO_CULTURA', 'CdCultureType'],
    ['MODALIDADE', 'Modality'],
    ['SIGLA', 'Initials'],
    ['NOME_MUNICIPIO', 'MunicipalityName'],
    ['COD_MUNICIPIO_IBGE', 'IBGEMunicipalityCode'],
    ['COD_UF', 'UfCode'],
    ['NOME_UF', 'UFName'],
    ['COD_UF_IBGE', 'IBGEUFCode'],
    ['FINANCIAMENTO', 'Financing'],
    ['VL_TAXA_JUROS', 'InterestRate'],
    ['CODIGO_PROGRAMA','CodeProgram']
    
]

const translation = value => {
    let valueTranslate = value;

    arrTranslation.find(item => {
       if(value.toUpperCase() == item[0].toUpperCase()) valueTranslate = item[1];
    });

    return valueTranslate;
}

const cleanValue = value => {
    return value.replace('\"', '').replace('"','');
}

module.exports = { translation, cleanValue }