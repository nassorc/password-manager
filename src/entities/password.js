module.exports = function buildMakeUser({Password} ) {
    return function makePassword({
        service,
        email,
        password = Password.generate(),
    } ={}) {
        if(!service) {
            throw new Error('Password must have a service name')
        }
        if(!email) {
            throw new Error('Passord must have a email')
        }
        return Object.freeze({
            getService: () => service,
            getEmail: () => email,
            getPassword: () => generatePassword
        })
    }
}