import React, { useState } from "react";
import "./AddDish.css";
import { makeStyles, CssBaseline, Box, TextField, Button, Container, Grid, Avatar, Typography } from "@material-ui/core";
import { Fastfood } from '@material-ui/icons';
import FileBase from 'react-file-base64';
import { useDispatch } from "react-redux";
import { createDish } from "../../../actions/dishes.actions"; 

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function AddDish() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [dishData, setDishData] = useState(
        {
            dishName: '',
            ingradiants: '',
            image: ''
        }
    );    
    /**
     * Handle create new dish add form submission
     * @param {*} event 
     */
    function handleSubmit(event) {
        event.preventDefault();
        console.log(dishData);
        dispatch(createDish(dishData));
        // console.log('Received Data for submit:', event.target.elements);
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <Fastfood />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Add New Dish
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                name="dishName"
                                variant="outlined"
                                required
                                fullWidth
                                id="dishName"
                                label="Dish Name"
                                autoFocus
                                autoComplete="off"
                                value={dishData.dishName}
                                onChange={(e) => setDishData({
                                    ...dishData, dishName: e.target.value
                                })}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="ingradiants"
                                label="Ingredients"
                                name="ingradiants"
                                placeholder="salt,eggs,sugar"
                                autoComplete="off"
                                value={dishData.ingradiants}
                                onChange={(e) => setDishData({
                                    ...dishData, ingradiants: e.target.value
                                })}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <div>
                                <FileBase
                                    type="file"
                                    multiple={false}
                                    onDone={({ base64 }) =>
                                        setDishData({ ...dishData, image: base64 })}></FileBase>
                            </div>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.submit}
                    >
                        Add
                    </Button>
                </form>
            </div>
            <Box mt={5}>
                {/* <Copyright /> */}
            </Box>
        </Container>
    );
}

export default AddDish;