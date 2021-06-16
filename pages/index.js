import Button from 'carbon-react/lib/components/button';
import AppWrapper from 'carbon-react/lib/components/app-wrapper';
import Icon from 'carbon-react/lib/components/icon';

function Index() {
    return (
        <>
            <AppWrapper>
                <Button>Hello Carbon</Button>
                <p style={{ color: 'red' }}>
                    Please remember to select the appropriate version of Carbon.
                </p>
                <Icon type="add" />
            </AppWrapper>
        </>
    );
}

export default Index;
