import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    "& > * + *": {
      marginTop: theme.spacing(3)
    }
  }
}));

export default function TagsProducts(props) {

  const productTags = props.tags
  const classes = useStyles();

  return (
        <div className={classes.root}>
        <Autocomplete
            multiple
            id="tags-outlined"
            options={productTags}
            getOptionLabel={(option) => option.title}
            filterSelectedOptions
            renderInput={(params) => (
            <TextField {...params} label="Choose Tags" variant="outlined"  />
            )}
        />
        </div>
  );
}


