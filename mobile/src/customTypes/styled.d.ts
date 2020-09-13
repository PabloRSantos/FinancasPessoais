import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,
        colors: {
          primary: string,
          darkPrimary: string,
          white: string,
          textInWhite: string,
          disabled: string,
          cinza: string,
          blue: string
        }
    }
}
