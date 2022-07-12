const jwt = require('jsonwebtoken')

// generate access token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30s',
    })
}














module.exports = generateToken