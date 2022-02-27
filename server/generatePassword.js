const bcrypt = require('bcryptjs');

/**
 * Add your password here
 */
const password = 'ajdjadkaks';

console.log('Generated password::', bcrypt.hashSync(password, 10));
