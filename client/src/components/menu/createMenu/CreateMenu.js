import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

// import { useSelector } from 'react-redux';
const CreateMenu = () => {
    const [menuData, setMenuData] = useState(
        {
            searchText: '',
            currentMenu: []
        }
    );  

    const handleSearchButtonClick = (event) => {
        console.log('----'+menuData.searchText);
    }

    const SearchButton = () => (
        <IconButton onClick={(e) => {
            handleSearchButtonClick(e)
        }}>
            <SearchIcon />
        </IconButton>
    )
    return (
        <div style={{ padding: 20 }}>
            <Grid container>
                <Grid
                    item
                    xs={6}
                    sm={4}
                    md={7}
                    style={{ padding: 20 }}
                >
                    <TextField
                        id="dishes-search"
                        label="Search Dishes"
                        value={menuData.searchText}
                        fullWidth
                        onChange={(e) => setMenuData({
                            searchText: e.target.value
                        })}
                        InputProps={{ endAdornment: <SearchButton /> }}
                    />
                </Grid>
                <Grid item xs={6} sm={8} md={5} component={Paper} elevation={2} square>
                    <Box
                    // sx={{
                    //     my: 8,
                    //     mx: 4,
                    //     display: 'flex',
                    //     flexDirection: 'column',
                    //     alignItems: 'center',
                    // }}
                    >
                        <p>Right side</p>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default CreateMenu;