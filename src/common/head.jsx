import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


export default props => (
    <div style={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ alignItems: 'center', }}>
            <Toolbar>
                <Typography variant="title" color="default" style={{ fontSize: 35 }}>
                    Spotify
             </Typography>
            </Toolbar>
        </AppBar>
    </div>
)
