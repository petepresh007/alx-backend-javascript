// module.exports = {
//     env: {
//         browser: false,
//         es6: true,
//         jest: true,
//         mocha: true
//     },
//     extends: [
//         'airbnb-base',
//         'plugin:jest/all',
//     ],
//     globals: {
//         Atomics: 'readonly',
//         SharedArrayBuffer: 'readonly',
//     },
//     parserOptions: {
//         ecmaVersion: 2018,
//         sourceType: 'module',
//     },
//     plugins: ['jest'],
//     rules: {
//         'max-classes-per-file': 'off',
//         'no-underscore-dangle': 'off',
//         'no-console': 'off',
//         'no-shadow': 'off',
//         'no-restricted-syntax': [

//             'error',
//             'LabeledStatement',
//             'WithStatement',
//         ],
//     },
//     overrides: [
//         {
//             files: ['*.js'],
//             excludedFiles: 'babel.config.js',
//         }
//     ]
// };

module.exports = {
    env: {
        browser: false,
        es6: true,
        mocha: true,
    },
    extends: [
        'airbnb-base',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        'max-classes-per-file': 'off',
        'no-underscore-dangle': 'off',
        'no-console': 'off',
        'no-shadow': 'off',
        'no-restricted-syntax': [
            'error',
            'LabeledStatement',
            'WithStatement',
        ],
    },
    overrides: [
        {
            files: ['*.test.js'], // Apply these settings to test files
            env: {
                jest: true,
            },
            extends: [
                'plugin:jest/all',
            ],
            plugins: ['jest'],
            rules: {
                // Jest-specific rules
                'jest/prefer-expect-assertions': 'off',
                'jest/expect-expect': 'off',
            },
        },
        {
            files: ['test/**/*.js'], // Apply these settings to Mocha test files
            env: {
                mocha: true,
            },
            plugins: ['mocha'],
            rules: {
                'mocha/no-exclusive-tests': 'error',
            },
        },
    ],
};
