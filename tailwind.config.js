const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',

    content: [
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            colors: {
                primary: colors.orange,
            },
        },
    },
};
