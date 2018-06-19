const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack.dev');

const fs = require('fs');
const path = require('path');

const compiler = Webpack(webpackConfig);
const devServerOptions = Object.assign({}, webpackConfig.devServer, {
    stats: {
        colors: true
    },
    before(app) {
        app.get('/barn', function(req, res) {
            setTimeout(() => res.send(fs.readFileSync(
                path.join(__dirname, '/mock/barn.json'),
                'UTF-8'
            )))
        });

        app.use((req, res, next) => {
            next();
        });
    }
});
const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(8000, '127.0.0.1', () => {
    console.log('Starting server on http://localhost:8000/soknad-kontantstotte/');
});