const bcryptjs = require('bcryptjs');

const hashPassword = async (req, res, next) => {
    try {
        if (req.body.password) {
            const salt = await bcryptjs.genSalt(10);
            req.body.password = await bcryptjs.hash(req.body.password, salt);
        }
        next();
    } catch (error) {
        res.status(500).json({ error: "Error hashing the password" });
    }
}

module.exports = hashPassword;
