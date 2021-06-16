import { useRouter } from 'next/router';
import { Tabs, Tab } from 'carbon-react/lib/components/tabs';
import Heading from 'carbon-react/lib/components/heading';
import Tile from 'carbon-react/lib/components/tile';
import { useCallback } from 'react';
import _ from 'lodash';
import AppWrapper from 'carbon-react/lib/components/app-wrapper';
import SiteLayout from './site-layout';

const CompanyLayout = ({ children }) => {
    const { pathname, replace, query } = useRouter();
    const { id } = query;
    const selectedTabId = _.last(pathname.split('/'));

    const handleTabChange = useCallback(
        tabId => {
            if (selectedTabId !== tabId) {
                replace('/companies/' + id + '/' + tabId);
            }
        },
        [id, replace, selectedTabId]
    );

    return (
        <SiteLayout>
            <AppWrapper>
                <Tile orientation="vertical">
                    <Heading title="My Company">
                        <Tabs
                            selectedTabId={selectedTabId}
                            onTabChange={handleTabChange}
                            setLocation={false}
                        >
                            <Tab title="Details" tabId="details" />
                            <Tab title="Account" tabId="account" />
                            <Tab title="Opportunities" tabId="opportunities" />
                        </Tabs>
                        <div>{children}</div>
                    </Heading>
                </Tile>
            </AppWrapper>
        </SiteLayout>
    );
};

export default CompanyLayout;
