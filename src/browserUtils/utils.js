
export function serverRequest() {
    let Url = '';

    if (process.env.NODE_ENV == 'production') {
        Url = 'https://aguilarwebdevportfolioserver.herokuapp.com'
    } else {
        Url = 'http://localhost:8080'
    }

    return Url
}

export function formatPhoneNumber(phoneNumberString) {
    var replaceString = (""+phoneNumberString).replace(/\D/g, '');
    var matchString = replaceString.match(/^(\d{3})(\d{3})(\d{4})$/);
    return (!matchString) ? null : "(" + matchString[1] + ") " + matchString[2] + "-" + matchString[3];
}
