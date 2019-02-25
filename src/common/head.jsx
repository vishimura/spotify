import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


export default props => (
    <div>
        <AppBar position="static" color="#1ED760">
            <Toolbar>
                <Typography variant="h5" color="primary">
                    Spotify
                    </Typography>
            </Toolbar>
        </AppBar>
    </div>
)