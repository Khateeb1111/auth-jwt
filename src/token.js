const jwt = require('jsonwebtoken');

/**
 * Implement this function to accept a payload and a secret key and return a JWT without an expiry time
 * 
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback
 */
function createToken(payload, key) {
    //var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
    const token = jwt.sign(payload, key)
    return token
}

/**
 * Implement this function to accept a payload, secret key and an expiry time, and return a JWT with an expiry
 * 
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#token-expiration-exp-claim
 */
function createTokenWithExpiry(payload, key, expiryTime) {
    // jwt.sign({data: 'foobar'}, 'secret', { expiresIn: 60 * 60 });
    const token = jwt.sign(payload, key,{expiresIn: expiryTime})
    return token
}

/**
 * Implement this function to accept a JWT and a secret key. Return the decoded token (the payload) if verification is successful, and false if it fails
 * 
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
 */
function verifyToken(token, key) {
    try {
    const result = jwt.verify(token, key)
    return result
    }
    catch(e) {
        return false
    }

}

module.exports = {
    createToken,
    createTokenWithExpiry,
    verifyToken
}
