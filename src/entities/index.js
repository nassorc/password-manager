const Password = require('../Password-generator')
const buildMakePassword = require('./password')

const makePassword = buildMakePassword({Password})
console.log(makePassword({service: 'Google', email: 'mat@gmail.com'}).getPassword())