interface IAppSettings {
    apiUrl: string;
    loginUrl: string;
}

const Environment = (): IAppSettings => {
    if (process.env.NODE_ENV === 'development') {
        return {
            apiUrl: 'http://localhost:8080/soknad-kontantstotte-api',
            loginUrl: 'http://localhost:8080/soknad-kontantstotte-api/local/cookie'
        };
    }

    return {
        apiUrl: window.location.href + '/soknad-kontantstotte-api',
        loginUrl: window.location.href + '/login'
    };
};

export default Environment;
