import React from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";



                                //PRODUCTS FORM

    //REGULAR
    export const ProductName = (props) => {

        return (
                <TextField
                    name="product_title"
                    value={props.product_title}
                    id="standard-multiline-flexible"
                    label="Product Name"
                    multiline
                    rowsMax={4}
                    onChange={props.handleChange}
                />
        )
    } 


    export const ProductModel = (props) => {

        return (
                <TextField
                    name="product_model"
                    value={props.product_model}
                    id="standard-multiline-flexible"
                    label="Product Model"
                    multiline
                    rowsMax={4}
                    onChange={props.handleChange}

                />
        )
    } 

    export function TagsProducts(props) {

        const useStyles = makeStyles((theme) => ({
          root: {
            width: 500,
            "& > * + *": {
              marginTop: theme.spacing(3)
            }
          }
        }));
      
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
                  onChange={props.handleTags}
                  renderInput={(params) => (
                  <TextField {...params} label="Choose Tags" variant="outlined"  />
                  )}
              />
              </div>
        );
      }
      

    export const CategoryProduct = (props) => {

        const categoriesProduct = props.categories

        return (
            <>
                <Autocomplete
                    id="controllable-states-demo"
                    options={categoriesProduct}
                    getOptionLabel={(option) => option.category_title}
                    filterSelectedOptions
                    style={{ width: 500 }}
                    onChange={props.handleCategories}
                    renderInput={(params) => <TextField {...params} label="Select Category Product" variant="outlined" />}
                />

            </>
        )
    }


    
    export const BrandProduct = (props) => {

        const brandsProduct = props.brands;

        return (
            <>
                <Autocomplete
                    id="controllable-states-demo"
                    options={brandsProduct}
                    getOptionLabel={(option) => option.brand_name}
                    filterSelectedOptions
                    style={{ width: 500 }}
                    onChange={props.handleBrands}
                    renderInput={(params) => <TextField {...params} label="Select Brand Product" variant="outlined" />}
                />

            </>
        )
    }

    export const QuantityProduct = (props) => {

        return (
                <TextField
                    name="quantity"
                    value={props.quantity}
                    id="standard-number"
                    label="Quantity Product"
                    type="number"
                    onChange={props.handleChange}

                />
        )
    } 


    export const PriceProduct = (props) => {

        return (
                <TextField
                    name="price"
                    value={props.price}
                    id="standard-number"
                    label="Price Product"
                    type="number"
                    onChange={props.handleChange}

                />
        )
    } 

    export const DiscountProduct = (props) => {

        return (
                <TextField
                    name="discount"
                    value={props.discount}
                    id="standard-multiline-flexible"
                    label="Discount Product"
                    multiline
                    rowsMax={4}
                    onChange={props.handleDiscount}

                />
        )
    } 

    export const ImageProduct = (props)=>{
        return (
            <input type="file" name="image" accept="image/*" onChange={props.handleImage} />
        )
    }



    //METAS   

    const styles = theme => ({
        input: {
        height: 120
        },
    });


    export const MetaName = (props) => {
        return (
            <TextField
                name="meta_name"
                value={props.meta_name}
                id="standard-multiline-flexible"
                placeholder="Meta Name"
                multiline
                rowsMax={4}
                onChange={props.handleChange}
            />
        )
    }


    export const MetaKeyword = withStyles(styles)(props =>  {
        const { classes } = props;

        return (
            <TextField
                name="meta_keywords"
                value={props.meta_keywords}
                id="outlined-textarea"
                placeholder="Meta Keywords"
                multiline
                variant="outlined"
                rowsMax={4}
                InputProps={{
                    className: classes.input
                }}
                onChange={props.handleChange}

            />
        )
    })



    export const MetaDescription = withStyles(styles)(props =>  {
        const { classes } = props;

        return (
            <TextField
                name="meta_description"
                value={props.meta_description}
                id="outlined-textarea"
                placeholder="Meta Description"
                multiline
                variant="outlined"
                rowsMax={4}
                InputProps={{
                    className: classes.input
                }}
                onChange={props.handleChange}

            />
        )
    })


    //Product edit form

    const findChosenList = (props,array)=>{
        let selectedValue = 0
        array.map(item=>{
            if(item.id === props.value ){
                 selectedValue = item
            }
        })
        return selectedValue
    }

    export const ProductNameEdit = (props) => {

        return (
                <TextField
                    name="product_title"
                    value={props.value}
                    id="standard-multiline-flexible"
                    label="Product Name"
                    multiline
                    rowsMax={4}
                    onChange={props.handleChange}
                />
        )
    } 


    export const ProductModelEdit = (props) => {

        return (
                <TextField
                    name="product_model"
                    value={props.value}
                    id="standard-multiline-flexible"
                    label="Product Model"
                    multiline
                    rowsMax={4}
                    onChange={props.handleChange}

                />
        )
    } 

    export function TagsProductsEdit(props) {

        const useStyles = makeStyles((theme) => ({
          root: {
            width: 500,
            "& > * + *": {
              marginTop: theme.spacing(3)
            }
          }
        }));
      
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
                  onChange={props.handleTags}
                  renderInput={(params) => (
                  <TextField {...params} label="Choose Tags" variant="outlined"  />
                  )}
              />
              </div>
        );
      }
      

    export const CategoryProductEdit = (props) => {

        
        const categoriesProduct = props.categories
        

        return (
            <>
                <Autocomplete
                    id="controllable-states-demo"
                    options={categoriesProduct}
                    defaultValue={findChosenList(props,categoriesProduct)}
                    getOptionLabel={(option) => option.category_title}
                    filterSelectedOptions
                    style={{ width: 500 }}
                    onChange={props.handleCategories}
                    renderInput={(params) => <TextField {...params} label="Select Category Product" variant="outlined" />}
                />

            </>
        )
    }

    
    export const BrandProductEdit = (props) => {

        const brandsProduct = props.brands;

        return (
            <>
                <Autocomplete
                    id="controllable-states-demo"
                    defaultValue={findChosenList(props,brandsProduct)}
                    options={brandsProduct}
                    getOptionLabel={(option) => option.brand_name}
                    filterSelectedOptions
                    style={{ width: 500 }}
                    onChange={props.handleBrands}
                    renderInput={(params) => <TextField {...params} label="Select Brand Product" variant="outlined" />}
                />

            </>
        )
    }

    export const QuantityProductEdit = (props) => {

        return (
                <TextField
                    name="quantity"
                    value={props.value}
                    id="standard-number"
                    label="Quantity Product"
                    type="number"
                    onChange={props.handleChange}

                />
        )
    } 


    export const PriceProductEdit = (props) => {

        return (
                <TextField
                    name="price"
                    value={props.value}
                    id="standard-number"
                    label="Price Product"
                    type="number"
                    onChange={props.handleChange}

                />
        )
    } 

    export const DiscountProductEdit = (props) => {

        return (
                <TextField
                    name="discount"
                    value={props.value}
                    id="standard-multiline-flexible"
                    label="Discount Product"
                    multiline
                    rowsMax={4}
                    onChange={props.handleDiscount}

                />
        )
    } 

    export const ImageProductEdit = (props)=>{
        return (
            <input type="file" name="image" accept="image/*" onChange={props.handleImage} src={props.value} />
        )
    }

  


                                        //Category FORM
export const CategoryName = (props) => {

        return (
                <TextField
                    name="category_title"
                    id="standard-multiline-flexible"
                    label="Category Name"
                    multiline
                    rowsMax={4}
                    onChange={props.handleChange}

                />
        )
    } 

export const CategoryNameEdit = (props) => {

        return (
                <TextField
                    name="category_title"
                    id="standard-multiline-flexible"
                    label="Category Name"
                    multiline
                    rowsMax={4}
                    onChange={props.handleChange}
                    value={props.value}

                />
        )
    } 
    

    export const MetaNameEdit = (props) => {
        return (
            <TextField
                name="meta_title"
                id="standard-multiline-flexible"
                placeholder="Meta Name"
                multiline
                rowsMax={4}
                onChange={props.handleChange}
                value={props.value}

            />
        )
    }


    export const MetaKeywordEdit = withStyles(styles)(props =>  {
        const { classes, value } = props;

        return (
            <TextField
                name="meta_keyword"
                id="outlined-textarea"
                placeholder="Meta Keywords"
                multiline
                variant="outlined"
                rowsMax={4}
                InputProps={{
                    className: classes.input
                }}
                onChange={props.handleChange}
                value={value}
            />
        )
    })



    export const MetaDescriptionEdit = withStyles(styles)(props =>  {
        const { classes, value } = props;

        return (
            <TextField
                name="meta_description"
                id="outlined-textarea"
                placeholder="Meta Description"
                multiline
                variant="outlined"
                rowsMax={4}
                InputProps={{
                    className: classes.input
                }}
                onChange={props.handleChange}
                value={value}

            />
        )
    })

