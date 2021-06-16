import _ from 'lodash';
import Box from 'carbon-react/lib/components/box';
import VerticalDivider from 'carbon-react/lib/components/vertical-divider';
import NavigationBar from 'carbon-react/lib/components/navigation-bar';
import { Menu, MenuItem } from 'carbon-react/lib/components/menu';
import { useRouter } from 'next/router';
import AppWrapper from 'carbon-react/lib/components/app-wrapper';

const SiteLayout = ({ children }) => {
    const { push } = useRouter();
    return (
        <>
            <div
                style={{
                    minHeight: '250px',
                }}
            >
                <NavigationBar navigationType="dark">
                    <Box>
                        <VerticalDivider displayInline pr={0} />
                    </Box>
                    <Menu display="flex" flex="1" menuType="dark">
                        <MenuItem onClick={() => push('/companies')}>
                            Companies
                        </MenuItem>
                        <MenuItem onClick={() => push('/opportunities')}>
                            Opportunities
                        </MenuItem>
                    </Menu>
                </NavigationBar>
                {children}
            </div>
        </>
    );
};

export default SiteLayout;
