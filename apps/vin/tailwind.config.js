module.exports = {
    // Extend or override default configuration
    ...require("cc-ui/tailwind.config.js"),

    /**
     * opt in to remove deprecated stuff
     * @see https://tailwindcss.com/docs/upcoming-changes
     */
    future: {
        removeDeprecatedGapUtilities: true
    },
    theme: {
        container: {
            center: true,
            padding: '0.5rem',
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1080px'
            }
        },
        extend: {
            backgroundColor: {
                rgba: {
                    white: 'rgba(255, 255, 255, 0.4)',
                    black: 'rgba(0, 0, 0, 0.4)'
                }
            },
            boxShadow: {
                xs: '0 0 0 0.25px rgba(0,0,0,0.35)',
                sm:
                    '0 0.25px 0.75px 0 rgba(0,0,0,0.15), 0 0.5px 1.5px 0 rgba(0,0,0,0.15)',
                default:
                    '0 0.5px 1.5px 0 rgba(0,0,0,0.13), 0 1px 3px 0 rgba(0,0,0,0.13)',
                md:
                    '0 0.75px 2.25px 0 rgba(0,0,0,0.11), 0 1.5px 6px 0 rgba(0,0,0,0.11)',
                lg: '0 1px 3px 0 rgba(0,0,0,0.09), 0 2px 12px 0 rgba(0,0,0,0.09)',
                xl:
                    '0 1.25px 3.75px 0 rgba(0,0,0,0.07), 0 2.5px 24px 0 rgba(0,0,0,0.07)',
                '2xl':
                    '0 1.5px 4.5px 0 rgba(0,0,0,0.05), 0 3px 48px 0 rgba(0,0,0,0.05)',
                inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
                outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
                none: 'none'
            },
            colors: {
                gray: {
                    100: '#F5F7F7',
                    200: '#D4D8D9',
                    300: '#ADB1B3',
                    400: '#8D9293',
                    500: '#797F80',
                    600: '#717778',
                    700: '#666C6D',
                    800: '#5C6263',
                    900: '#494F50'
                },
                cta: {
                    100: '#DAF2EA',
                    200: '#47CCA0',
                    300: '#00BF7F',
                    400: '#00A66E',
                    500: '#008055',
                    600: '#00593B',
                    700: '#00472F',
                    800: '#003623',
                    900: '#002418'
                },
                green: {
                    100: '#FCFFFE',
                    200: '#DAF2EA',
                    300: '#ACE6D2',
                    400: '#47CCA0',
                    500: '#00BF80',
                    600: '#00A66F',
                    700: '#008055',
                    800: '#00593C',
                    900: '#004730'
                }
            },
            fontFamily: {
                sans: [
                    'Niramit',
                    'system-ui',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'Roboto',
                    '"Helvetica Neue"',
                    'Arial',
                    '"Noto Sans"',
                    'sans-serif',
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                    '"Noto Color Emoji"'
                ]
            },
            spacing: {
                '1/2': '50%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '5/12': '41.666667%'
            },
            transitionProperty: {
                elevation: 'transform, box-shadow'
            },
            inset: {
                16: '4rem'
            },
            letterSpacing: {
                'tight-xl': '-0.15rem',
                'tight-l': '-0.1rem',
                'tight-m': '-0.075rem',
                'tight-s': '-0.05rem',
                'wide-s': '0.05rem'
            },
            lineHeight: {
                14: '3.875rem'
            }
        },
        screens: {
            sm: '640px',
            // => @media (min-width: 640px) { ... }
            md: '768px',
            // => @media (min-width: 768px) { ... }
            lg: '1024px',
            // => @media (min-width: 1024px) { ... }
            xl: '1170px'
            // => @media (min-width: 1170px) { ... }
        }
    }
}