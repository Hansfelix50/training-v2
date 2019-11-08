const request = require('request');

// Generar código de validación por SMS
function generateValidationCode() {

    const digits = '0123456789';
    let validationCode = '';

    for (let i = 0; i < 4; i++) {
        validationCode += digits[Math.floor(Math.random() * 10)];
    }
    return validationCode;
}

function sendValidationCode(cellphone, validationCode) {

    //Docs: https://www.wausms.com/static/es/documentation_rest.pdf

    let username = "hansfelix50@gmail.com";
    let password = "Xico.18.93";

    var options = {
        url: 'https://dashboard.wausms.com/Api/rest/message',
        auth: {
            user: username,
            password: password
        },
        body: JSON.stringify({
            to: [cellphone],
            text: `Tú código de validación es ${validationCode} `,
            from: "msg"
        })
    }

    request.post(options, function (err, res, body) {
        if (err) {
            console.dir(err)
            return
        }
        console.dir('headers', res.headers)
        console.dir('status code', res.statusCode)
        console.dir(body)
    })
}

module.exports = {
    generateValidationCode,
    sendValidationCode
}