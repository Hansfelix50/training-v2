// Generar código de validación por SMS
function generateValidationCode() {

    const digits = '0123456789';
    let validationCode = '';

    for (let i = 0; i < 4; i++) {
        validationCode += digits[Math.floor(Math.random() * 10)];
    }
    return validationCode;
}

function sendValidationCode(cellphone) {
    //TODO: Completar
    console.log('validar')
}

module.exports = {
    generateValidationCode,
    sendValidationCode
}