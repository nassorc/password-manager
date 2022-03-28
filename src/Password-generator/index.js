const generator = require('generator-password');
const Password = Object.freeze({
    generate: generator.generate,
})
const a = Password.generate({length: 10, numbers: true})

// module.exports = Password
