import React from 'react';
import { Grid } from './styles';

import ServerName from '../ServerName';
import ServerList from '../ServerList';

const Layout: React.FC = () => {
    return(
    <Grid>
        <ServerList />
        <ServerName />    
    </Grid>
    );
};

export default Layout;