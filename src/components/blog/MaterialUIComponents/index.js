import React from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { withStyles } from "@material-ui/core/styles";




//REGULAR
export const PostTitle = () => {

    return (
            <TextField
                id="standard-multiline-flexible"
                label="Post Title"
                multiline
                rowsMax={4}
            />
    )
} 


export const CategoryPost = () => {

    const categoriesPost = ['Tech', 'Humanity', 'Culture'];

    return (
        <>
            <Autocomplete
                id="controllable-states-demo"
                options={categoriesPost}
                style={{ width: 500 }}
                renderInput={(params) => <TextField {...params} label="Select Category Post" variant="outlined" />}
            />

        </>
    )
}

export const StatusPost = () => {

    const postStatus = ['Active', 'Disabled'];

    return (
        <>
            <Autocomplete
                id="controllable-states-demo"
                options={postStatus}
                style={{ width: 500 }}
                renderInput={(params) => <TextField {...params} label="Select Post Status" variant="outlined" />}
            />

        </>
    )
}


//METAS   

const styles = theme => ({
    input: {
      height: 120
    },
  });


export const MetaTitle = () => {
    return (
        <TextField
            id="standard-multiline-flexible"
            placeholder="Meta Title"
            multiline
            rowsMax={4}
        />
    )
}


export const MetaKeyword = withStyles(styles)(props =>  {
    const { classes } = props;

    return (
        <TextField
            id="outlined-textarea"
            placeholder="Meta Keywords"
            multiline
            variant="outlined"
            rowsMax={4}
            InputProps={{
                className: classes.input
            }}
        />
    )
})



export const MetaDescription = withStyles(styles)(props =>  {
    const { classes } = props;

    return (
        <TextField
            id="outlined-textarea"
            placeholder="Meta Description"
            multiline
            variant="outlined"
            rowsMax={4}
            InputProps={{
                className: classes.input
            }}
        />
    )
})

      