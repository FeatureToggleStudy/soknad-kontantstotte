interface IEnvUrls {
    apiUrl: string;
    loginUrl: string;
}

const Environment = (): IEnvUrls => {
    if (process.env.NODE_ENV === 'development') {
        return {
            apiUrl: 'http://localhost:8080/soknad-kontantstotte-api',
            loginUrl: 'http://localhost:8080/soknad-kontantstotte-api/local/cookie'
        };
    } else if (window.location.hostname.indexOf('soknad-kontantstotte-t') > -1) {
        return {
            apiUrl: 'https://soknad-kontantstotte-api-t.nav.no/soknad-kontantstotte-api',
            loginUrl: 'https://loginservice-q.nav.no/login'
        };
    } else if (window.location.hostname.indexOf('soknad-kontantstotte-q') > -1) {
        return {
            apiUrl: 'https://soknad-kontantstotte-api-q.nav.no/soknad-kontantstotte-api',
            loginUrl: 'https://loginservice-q.nav.no/login'
        };
    }

    return {
        apiUrl: 'https://soknad-kontantstotte-api.nav.no/soknad-kontantstotte-api',
        loginUrl: 'https://loginservice.nav.no/login'
    };
};

export default Environment;