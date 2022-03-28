const generator = require('generate-password');

const Password = Object.freeze({
    generate: generator.generate
})

module.exports = Password

// console.log(Password.generate({length: 16, numbers: true}))