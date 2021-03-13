import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        screens: {
            mobileS: string,
            mobileM: string,
            mobileL: string,
            tablet: string,
            laptop: string,
            laptopL: string,
            desktop: string,
            desktopL: string,
        },
        text: {
            primary: string,
            link: string
        }
    }
}