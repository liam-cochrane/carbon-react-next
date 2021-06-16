import CompanyLayout from 'src/components/company-layout';
import Search from 'carbon-react/lib/__experimental__/components/search';
import {
    FlatTable,
    FlatTableCell,
    FlatTableHead,
    FlatTableHeader,
    FlatTableRow,
    FlatTableBody,
} from 'carbon-react/lib/components/flat-table';
import _ from 'lodash';

const data = {
    12345: {
        title: 'My Opportunity 1',
    },
    12346: {
        title: 'My Opportunity 2',
    },
    12347: {
        title: 'My Opportunity 3',
    },
};

const Opportunities = () => {
    return (
        <CompanyLayout>
            <Search defaultValue="" m={1} />
            <FlatTable>
                <FlatTableHead>
                    <FlatTableRow>
                        <FlatTableHeader>Title</FlatTableHeader>
                    </FlatTableRow>
                </FlatTableHead>
                <FlatTableBody>
                    {_.values(
                        _.mapValues(data, (value, key) => (
                            <FlatTableRow key={key}>
                                <FlatTableCell>{value.title}</FlatTableCell>
                            </FlatTableRow>
                        ))
                    )}
                </FlatTableBody>
            </FlatTable>
        </CompanyLayout>
    );
};

export default Opportunities;
