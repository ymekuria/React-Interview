module.exports = {
    env: {
        browser: true,
        es2021 : true,
        node   : true,
        jest   : true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    settings: {
        react: {
            version: "detect",
        },
    },
    // parser       : '@typescript-eslint/parser',
    // parserOptions: {
    // 	ecmaFeatures: { jsx: true },
    // 	ecmaVersion : 12,
    // 	sourceType  : 'module',
    // },
    // plugins: [ 'react', '@typescript-eslint' ],
    rules: {
        // possible errors
        "react/display-name"                               : "off",
        "key-spacing"                                      : ["warn", { align: "colon" }],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any"               : "off",
    },
};
