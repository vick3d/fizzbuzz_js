const chai = require('chai');
const BrowserHelpers = require('e2e_training_wheels')
const fs = require('fs');
global.browser = new BrowserHelpers()
global.expect = chai.expect;

let fizzBuzz = fs.readFileSync('./src/js/fizz-buzz.js');
eval( fizzBuzz + `\nexports.FizzBuzz = FizzBuzz;`)
