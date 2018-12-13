import getData from '../data/getData'

export default function(taxableIncome, country='US', year=2018, jurisdiction='federal', 
    filingStatus="single") {
    
    //const getData = require('../data/getData.js');
    const dataObject = getData(country,year,jurisdiction);
    
    const taxBracket = dataObject.taxes.income.rate[filingStatus];

    var taxDue = 0; 
    const numBrackets = taxBracket.length;
    
    if (taxableIncome > taxBracket[numBrackets - 1][0]) {
      taxDue += (taxableIncome - taxBracket[numBrackets - 1][0]) * taxBracket[numBrackets - 1][1];
      taxableIncome = taxBracket[numBrackets - 1][0];
    }

    for (var i = 0; i < (numBrackets - 1); i++) {
      if (taxBracket[i][0] <= taxableIncome) {
        if (taxBracket[i + 1][0] > taxableIncome) {
          taxDue += (taxableIncome - taxBracket[i][0]) * taxBracket[i][1];
        } else {
          taxDue += (taxBracket[i+1][0] - taxBracket[i][0]) * taxBracket[i][1];
        }
      }
    }

    return taxDue;
    
  }