module.exports = {
    root: true,
    env: {
        node: true,
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        semi: [2, 'always'],
        'generator-star-spacing': 'off',
        'no-multi-spaces': 0,
        'comma-dangle': [0, 'ignore'],
        'dot-location': 0,
        'space-before-function-paren': [0, 'always'],
        'newline-after-var': 0,
        'object-shorthand': 0,
        indent: [2, 4],
        quotes: [2, 'single'],
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
