import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import { BE_URL } from '../../../api';
import axios from 'axios';
// import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import SecondaryMenu from './../../app-menu/SecondaryMenu';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './CreateMenu.css'
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@mui/icons-material/Delete';

// import { useSelector } from 'react-redux';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    }
}));

const MealSection = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {props.items.length < 1 ? '' : <Paper className={classes.paper}>
                <Typography gutterBottom variant="subtitle1">
                    {props.title}
                </Typography>
                {
                    props.items.map((menuItem, index) =>
                        <Grid container spacing={2} key={menuItem.slug} className="currentMenuItem">
                            <Grid item>
                                <ButtonBase className={classes.image}>
                                    <img className={classes.img} alt={menuItem.slug} src={menuItem.thumbnail_url} />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1">
                                            {menuItem.name}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            Full resolution 1920x1080 • JPEG
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Fab color="primary" aria-label="add" size="small" onClick={(e) => props.itemDeletionHandler(props.mealTime, index)}>
                                    <DeleteIcon />
                                </Fab>
                            </Grid>
                        </Grid>
                    )
                }
            </Paper>}
        </div>
    );
}

const CreateMenu = () => {
    const [menuData, setMenuData] = useState(
        {
            searchText: '',
            currentMenu: {
                "breakfast": [],
                "lunch": [],
                "dinner": [],
            },
            searchResults: [],
            fetchingData: false
        }
    );
    const BE_URL_Master = BE_URL + "/master";
    const handleSearchButtonClick = (event) => {
        let apiUrl = `${BE_URL_Master}?q=${menuData.searchText}`;
        setMenuData({
            ...menuData,
            fetchingData: true
        });
        axios.get(apiUrl)
            .then(res => {
                setMenuData({
                    ...menuData,
                    searchResults: res.data.results,
                    fetchingData: false
                });
            })
            .catch((error) => {
                console.error(error.message);
                setMenuData({
                    ...menuData,
                    searchResults: [],
                    fetchingData: false
                });
            });
    }

    const handleSearchInputKeydown = (event) => {
        if (event.key === 'Enter') {
            handleSearchButtonClick(event);
        }
    }

    const handleMenuItemAddition = (event, dish) => {
        let tmpMenu = menuData.currentMenu;
        let mealTime = event.target.value;
        let isNotDuplicate = true;
        tmpMenu[mealTime].forEach((dishIn) => {
            if (dishIn.slug === dish.slug)
                isNotDuplicate = false;
        });
        if (isNotDuplicate) {
            tmpMenu[mealTime].push(dish);
            setMenuData({
                ...menuData,
                currentMenu: tmpMenu
            });
        }else {
            alert("Item Already exists in the menu");
        }    
    }

    const handleMenuItemDeletion = (mealTime, index) => {
        let tmpMenu = menuData.currentMenu;
        tmpMenu[mealTime].splice(index, 1);
        setMenuData({
            ...menuData,
            currentMenu: tmpMenu
        });
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
                            ...menuData,
                            searchText: e.target.value
                        })}
                        onKeyDown={(e) => handleSearchInputKeydown(e)}
                        InputProps={{ endAdornment: <SearchButton /> }}
                    />
                    <Box>
                        {menuData.fetchingData ? <CircularProgress /> :
                            <>
                                <Grid container spacing={4}>
                                    {menuData.searchResults.map((dish) => (
                                        <Grid item key={dish.id} xs={12} sm={6} md={4}>
                                            <Card
                                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                            >
                                                <CardMedia
                                                    component="img"
                                                    sx={{
                                                        // 16:9
                                                        // pt: '56.25%',
                                                    }}
                                                    image={dish.thumbnail_url}
                                                    alt="random"
                                                />
                                                <CardContent sx={{ flexGrow: 1 }} spacing={4}>
                                                    <Typography gutterBottom variant="subtitle1">
                                                        {dish.name}
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <FormControl className="add-to-menu-select">
                                                        <InputLabel>Add to Menu</InputLabel>
                                                        <Select
                                                            labelId="demo-simple-select-label"
                                                            value={""}
                                                            onChange={(e) => handleMenuItemAddition(e, dish)}
                                                        >
                                                            <MenuItem value={"breakfast"}>Breakfast</MenuItem>
                                                            <MenuItem value={"lunch"}>Lunch</MenuItem>
                                                            <MenuItem value={"dinner"}>Dinner</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                            </>
                        }
                    </Box>
                </Grid>
                <Grid item xs={6} sm={8} md={5} component={Paper} elevation={2} square>
                    <Box>
                        <SecondaryMenu />
                        <MealSection
                            title="Breakfast" mealTime="breakfast"
                            items={menuData.currentMenu["breakfast"]}
                            itemDeletionHandler={handleMenuItemDeletion} />
                        <MealSection
                            title="Lunch" mealTime="lunch"
                            items={menuData.currentMenu["lunch"]}
                            itemDeletionHandler={handleMenuItemDeletion} />
                        <MealSection
                            title="Dinner" mealTime="dinner"
                            items={menuData.currentMenu["dinner"]}
                            itemDeletionHandler={handleMenuItemDeletion} />
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default CreateMenu;