const jwt = require("jsonwebtoken");

exports = {};

exports.getToken = async (email, user) => {
    // Assume this code is complete
    const token = jwt.sign(
        {identifier: user._id},
        "V7HG449YT"
    );
    return token;
};

module.exports = exports;