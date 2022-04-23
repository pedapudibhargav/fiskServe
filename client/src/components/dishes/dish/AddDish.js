import React from "react";
import "./AddDish.css";
import { makeStyles, CssBaseline, Box, TextField, Button, Container, Grid, Avatar, Typography } from "@material-ui/core";
import { Fastfood } from '@material-ui/icons';

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

const FIELD_NAMES = {
    NAME: "name",
    INGRADIANTS: "ingradiants",
};

function AddDish() {
    const classes = useStyles();

    /**
     * Handle create new dish add form submission
     * @param {*} event 
     */
    function handleSubmit(event) {
        event.preventDefault();
        const fieldNames = Object.keys(FIELD_NAMES);
        fieldNames.forEach((fieldKey) => {
            const fieldName = FIELD_NAMES[fieldKey];
            const inputField = event.target.querySelector(`input[name="${fieldName}"]`);
            const fieldValue = typeof (inputField) != 'undefined' ? inputField.value : "";
            console.log(`${fieldName}=${fieldValue}`);
        });
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
                                name={FIELD_NAMES.NAME}
                                variant="outlined"
                                required
                                fullWidth
                                id="dishName"
                                label="Dish Name"
                                autoFocus
                                autoComplete="off"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="ingradiants"
                                label="Ingredients"
                                name={FIELD_NAMES.INGRADIANTS}
                                placeholder="salt,eggs,sugar"
                                autoComplete="off"
                            />
                        </Grid>
                        {/* <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid> */}
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Add
                    </Button>
                    {/* <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid> */}
                </form>
            </div>
            <Box mt={5}>
                {/* <Copyright /> */}
            </Box>
        </Container>
    );
}

export default AddDish;