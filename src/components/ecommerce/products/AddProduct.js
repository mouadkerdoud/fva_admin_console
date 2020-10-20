import React,{Component} from 'react'

/* CKEditor */
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"

import TagsProducts from "./TagsProducts"

// Material UI
import {ProductName, ProductModel, CategoryProduct, BrandProduct, QuantityProduct, PriceProduct, DiscountProduct} from "../MaterialUIComponents/index"
import {MetaName, MetaKeyword, MetaDescription } from "../MaterialUIComponents/index"

import ImageUploader from "../../layout/ImageUploader"





class AddProduct extends Component {

    state = {
        isLoading: true,
        tags: null,
        brands: null,
        categories: null
    } 

    async componentDidMount(){
        const url_tags = "http://fva-backend-dev.herokuapp.com/api/blog/tag/"
        const url_brands = "http://fva-backend-dev.herokuapp.com/api/shop/brand/"
        const url_categories = "http://fva-backend-dev.herokuapp.com/api/blog/category/"
        
        try{
            const [tags, categories, brands] = await Promise.all([
                (await fetch(url_tags)).json(),
                (await fetch(url_categories)).json(),
                (await fetch(url_brands)).json()
            ])
            
            this.setState({
                isLoading: false,
                tags: tags.results,
                categories: categories.results,
                brands: brands.results
            })

        } catch(err){
            console.log(err)
        }
        
       
    }

    render(){

        const {tags, categories, brands, isLoading} = this.state
        console.log(categories, brands)

        if(isLoading || !tags || !categories || !brands ){
            return <div className="container">Loading ... </div>
        }
        
        else{
            return (

                <div className="container">
                    <h1>Add Product</h1>
            
                    <form >
                        <div className="addcategory-page-container">
            
            
                            <div className="side">
            
                                <div className="field label-input">
                                    <ProductName />
                                </div>
            
            
                                <div className="field label-input">
                                    <ProductModel />
                                </div>
            
                                <div className="field label-input">
                                   <QuantityProduct />
                                </div>
            
                                <div className="field label-input">
                                    <PriceProduct />                        
                                </div>
            
                                <div className="field label-input">
                                    <TagsProducts tags={tags} />
                                </div>
            
                                <div className="field label-input">
                                    <CategoryProduct categories={categories} />
                                </div>
            
                                <div className="field label-input">
                                    <BrandProduct brands={brands} />
                                </div>
            
                                <div className="field label-input">
                                    <DiscountProduct />
                                </div>
            
            
                                <div className="label-input">
                                    <CKEditor
                                                config={{placeholder: "Short Description..."}} 
                                                editor={ClassicEditor}
                                                onInit={editor=>{
                                                }}
                                    />
                                </div>
            
                                <div className="label-input">
                                    <CKEditor
                                                config={{placeholder: "Long Description..."}} 
                                                editor={ClassicEditor}
                                                onInit={editor=>{
                                                }}
                                    />
                                </div>
            
                                <div className="field label-input">
                                    <ImageUploader />
                                </div>
            
            
                            </div>
            
            
                    
                            <div className="side side-second">
                               
                                <div style={{marginBottom:"3rem"}} className="label-input">
                                    <MetaName />
                                </div>
            
                                <div style={{marginBottom:"3rem"}} className="label-input">
                                    <MetaKeyword />
                                </div>
            
                                <div style={{marginBottom:"3rem"}} className="label-input">
                                    <MetaDescription /> 
                                </div>
            
                                <button className="btn">Add Product</button>
            
                            </div>
            
            
            
                        </div>
                    </form>
                </div>
            
            
              )
        }
        
    }
    
  
}

export default AddProduct
