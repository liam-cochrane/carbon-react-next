import { ThemeProvider } from 'styled-components';
import mintTheme from 'carbon-react/lib/style/themes/mint';
import GlobalStyle from 'carbon-react/lib/style/global-style';
import Button from 'carbon-react/lib/components/button';
import AppWrapper from 'carbon-react/lib/components/app-wrapper';
import Icon from 'carbon-react/lib/components/icon';

function Index() {
    return (
        <>
            <ThemeProvider theme={mintTheme}>
                <GlobalStyle />
                <AppWrapper>
                    <Button>Hello Carbon</Button>
                    <p style={{ color: 'red' }}>
                        Please remember to select the appropriate version of
                        Carbon.
                    </p>
                    <Icon type="add" />
                </AppWrapper>
            </ThemeProvider>
        </>
    );
}

export default Index;
