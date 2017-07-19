
export function serverRequest() {
    let Url = '';

    if (process.env.NODE_ENV == 'production') {
        Url = 'https://aguilarwebdevportfolioserver.herokuapp.com'
    } else {
        Url = 'http://localhost:8080'
    }

    return Url
}
