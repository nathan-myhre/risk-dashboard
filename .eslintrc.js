module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
    },
    extends: [
        'plugin:vue/recommended',
    ],
    rules: {
        // use 4-space indents with default rules
        'vue/html-indent': ['warn', 4, {}],
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
    },
};
