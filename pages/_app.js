import { ThemeProvider } from 'styled-components';
import mintTheme from 'carbon-react/lib/style/themes/mint';
import GlobalStyle from 'carbon-react/lib/style/global-style';
import '../styles.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={mintTheme}>
            <GlobalStyle />
            <Component {...pageProps} />{' '}
        </ThemeProvider>
    );
}
