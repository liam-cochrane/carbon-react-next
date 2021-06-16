import CompanyLayout from 'src/components/company-layout';
import { Dl, Dt, Dd } from 'carbon-react/lib/components/definition-list';

const Account = () => {
    return (
        <CompanyLayout>
            <Dl>
                <Dt>Account Number</Dt>
                <Dd>AOO456</Dd>
            </Dl>
        </CompanyLayout>
    );
};

export default Account;
