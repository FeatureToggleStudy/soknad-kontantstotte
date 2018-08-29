interface IEnvUrls {
    apiUrl: string;
    loginUrl: string;
    saksoversikt: string;
}

const Environment = (): IEnvUrls => {
    if (process.env.NODE_ENV === 'development') {
        return {
            apiUrl: '/soknad-kontantstotte-api/api',
            loginUrl: 'http://localhost:8080/api/local/cookie',
            saksoversikt: 'https://tjenester.nav.no/saksoversikt/app',
        };
    } else if (window.location.hostname.indexOf('ci-test-server') > -1) {
        return {
            apiUrl: '/soknad-kontantstotte-api/api',
            loginUrl: 'http://localhost:8080/api/local/cookie',
            saksoversikt: 'https://tjenester.nav.no/saksoversikt/app',
        };
    } else if (window.location.hostname.indexOf('soknad-kontantstotte-t') > -1) {
        return {
            apiUrl: 'https://soknad-kontantstotte-api-t.nav.no/api',
            loginUrl: 'https://loginservice-q.nav.no/login',
            saksoversikt: 'https://tjenester.nav.no/saksoversikt/app',
        };
    } else if (window.location.hostname.indexOf('soknad-kontantstotte-q') > -1) {
        return {
            apiUrl: 'https://soknad-kontantstotte-api-q.nav.no/api',
            loginUrl: 'https://loginservice-q.nav.no/login',
            saksoversikt: 'https://tjenester.nav.no/saksoversikt/app',
        };
    }

    return {
        apiUrl: 'https://soknad-kontantstotte-api.nav.no/api',
        loginUrl: 'https://loginservice.nav.no/login',
        saksoversikt: 'https://tjenester.nav.no/saksoversikt/app',
    };
};

export default Environment;
