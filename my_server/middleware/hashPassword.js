const bcrypt = require('bcryptjs');

const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  } catch (error) {
    throw new Error('Error hashing the password');
  }
};

module.exports = hashPassword;
