module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ],
};

module.exports = {
    // ... other configuration
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                config: './postcss.config.js',
                            },
                        },
                    },
                ],
            },
        ],
    },
};