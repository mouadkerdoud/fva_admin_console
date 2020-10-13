import React from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { withStyles } from "@material-ui/core/styles";




//REGULAR
export const ProductName = () => {

    return (
            <TextField
                id="standard-multiline-flexible"
                label="Product Name"
                multiline
                rowsMax={4}
            />
    )
} 


export const ProductModel = () => {

    return (
            <TextField
                id="standard-multiline-flexible"
                label="Product Model"
                multiline
                rowsMax={4}
            />
    )
} 


export const CategoryProduct = () => {

    const categoriesProduct = ['Electronics', 'Clothes', 'Home Furniture'];

    return (
        <>
            <Autocomplete
                id="controllable-states-demo"
                options={categoriesProduct}
                style={{ width: 500 }}
                renderInput={(params) => <TextField {...params} label="Select Category Product" variant="outlined" />}
            />

        </>
    )
}

export const BrandProduct = () => {

    const postStatus = ['Alver', 'Lacoste', "Kalles"];

    return (
        <>
            <Autocomplete
                id="controllable-states-demo"
                options={postStatus}
                style={{ width: 500 }}
                renderInput={(params) => <TextField {...params} label="Select Brand Product" variant="outlined" />}
            />

        </>
    )
}

export const QuantityProduct = () => {

    return (
            <TextField
                id="standard-number"
                label="Quantity Product"
                type="number"
           
            />
    )
} 


export const PriceProduct = () => {

    return (
            <TextField
                id="standard-number"
                label="Price Product"
                type="number"
            />
    )
} 

export const DiscountProduct = () => {

    return (
            <TextField
                id="standard-multiline-flexible"
                label="Discount Product"
                multiline
                rowsMax={4}
            />
    )
} 




//METAS   

const styles = theme => ({
    input: {
      height: 120
    },
  });


export const MetaName = () => {
    return (
        <TextField
            id="standard-multiline-flexible"
            placeholder="Meta Name"
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

      