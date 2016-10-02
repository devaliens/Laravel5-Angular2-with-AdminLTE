process.env.DISABLE_NOTIFIER = true;

var elixir = require('laravel-elixir'),
    webpack = require('webpack');

require('laravel-elixir-livereload');
require('laravel-elixir-webpack-official');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    /**
     * Bootstrap
     **/
    var bootstrapPath = 'node_modules/bootstrap-less';

    mix.copy(bootstrapPath, 'resources/vendor/bootstrap/');
    mix.copy(bootstrapPath + '/fonts', 'public/fonts');

    /**
     * AdminLTE
     **/
    mix.copy('vendor/almasaeed2010/adminlte/bootstrap', 'public/AdminLTE/bootstrap');
    mix.copy('vendor/almasaeed2010/adminlte/build', 'public/AdminLTE/build');
    mix.copy('vendor/almasaeed2010/adminlte/dist', 'public/AdminLTE/dist');
    mix.copy('vendor/almasaeed2010/adminlte/plugins', 'public/AdminLTE/plugins');

    /**
     * JQuery
     **/
    mix.copy('node_modules/jquery/dist/jquery.min.js', 'public/js/jquery');

    /**
     * Less
     **/
    mix.less('app.less');

    /**
     * Scripts webpack bundling and copying
     **/
    mix.webpack(
        [],
        'public/js',
        'resources/assets/typescript',
        {
            entry: {
                app: './resources/assets/typescript/main.ts',
                vendor: './resources/assets/typescript/vendor.ts'
            },
            debug: true,
            devtool: 'source-map',
            resolve: {
                extensions: ['', '.ts', '.js']
            },
            module: {
                loaders: [
                    {
                        test: /\.ts$/,
                        loader: 'awesome-typescript-loader',
                        exclude: /node_modules/
                    },
                    {
                        test: /\.html$/,
                        loader: 'raw-loader'
                    }
                ]
            },
            plugins: [
                new webpack.ProvidePlugin({
                    '__decorate': 'typescript-decorate',
                    '__extends': 'typescript-extends',
                    '__param': 'typescript-param',
                    '__metadata': 'typescript-metadata'
                }),
                new webpack.optimize.CommonsChunkPlugin({
                    name: 'vendor',
                    filename: 'vendor.js',
                    minChunks: Infinity
                }),
                new webpack.optimize.CommonsChunkPlugin({
                    name: 'app',
                    filename: 'app.js',
                    minChunks: 4,
                    chunks: [
                        'app'
                    ]
                }),
                // new webpack.optimize.UglifyJsPlugin({
                //     compress: {
                //         warnings: false
                //     },
                //     sourceMap: true,
                //     minimize: true,
                //     mangle: false
                // })
            ],
            node: {
                global: 'window'
            }
        }
    );

    mix.version([
        'css/app.css',
        'js/app.js',
        'js/vendor.js'
    ]);

    mix.livereload([
        'public/build/css/*',
        'public/build/js/*'
    ]);
});
