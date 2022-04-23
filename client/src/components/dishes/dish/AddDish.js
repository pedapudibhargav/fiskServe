import React from "react";
import "./AddDish.css";
import { TextField, Button, Container, Grid } from "@material-ui/core";

function AddDish() {
    //   const [data, setData] = React.useState(null);

    return (
        <div className="AddDish">
            <Container maxWidth="lg">
                <p>Add Dish component</p>
                <form noValidate autoComplete="off">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField name="title" id="title" label="Title" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name="ingradiants" id="ingradiants" label="Ingradiants ',' seperated" />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary">
                                Create
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </div>
    );
}

export default AddDish;