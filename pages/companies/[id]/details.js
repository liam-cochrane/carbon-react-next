import CompanyLayout from 'src/components/company-layout';
import { Dl, Dt, Dd } from 'carbon-react/lib/components/definition-list';
import Link from 'carbon-react/lib/components/link';

const Details = () => {
    return (
        <CompanyLayout>
            <Dl>
                <Dt>Company Type</Dt>
                <Dd>Customer</Dd>
                <Dt>Primary Contact</Dt>
                <Dd>Barry Testerson</Dd>
                <Dt>Email</Dt>
                <Dd><Link icon="email" href="mailto:info@mycompany.com">info@mycompany.com</Link></Dd>
            </Dl>
        </CompanyLayout>
    );
};

export default Details;
