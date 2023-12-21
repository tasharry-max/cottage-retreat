/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
    screens: {
        xs: '300px',
        sm: '600px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
    fontFamily: {
        'body': '"Open Sans"'
    },
    colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: {
            0: '#ffffff',
            100: '#F7FAF6',
            200: '#F1F3F0',
            300: '#CAD1CE',
            400: '#D3DDC6'
        },
        green: {
            0: '#00B453',
            100: '#2E4845',
            200: '#253F3C'
        },
   
    }
   
};
export const plugins = [];
