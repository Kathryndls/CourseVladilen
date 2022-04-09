module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "plugin:react/recommended",
        "standard"
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        indent: ["error", 4],
        semi: [2, "always"],
        "space-before-function-paren": ["error", "never"],
        quotes: ["error", "double", { allowTemplateLiterals: true }]
    }
};

// {
//     "extends": "airbnb-base",
//     "env": {
//         "browser": true
//     },
//     "rules": {
//         "linebreak-style": 0,
//         "global-require": 0,
//         "eslint linebreack-style": [0, "error", "windows"]
//     }
// }
