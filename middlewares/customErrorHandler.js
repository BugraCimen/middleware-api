const CustomErrorManager = require("../managers/CustomErrorManager");

const customErrorHandler = (err, req, res, next) => {
    let customError = err;

    if (err.name === "SyntaxError") {
        customError = new CustomErrorManager("Unexpected Syntax", 400);
    }
    res.status(customError.status || 500).json({
        status: false,
        message: customError.message || "Internal Server Message",
    });
}

module.exports = customErrorHandler;