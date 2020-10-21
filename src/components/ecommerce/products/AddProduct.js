import React,{Component} from 'react'

/* CKEditor */
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"


// Material UI
import {ProductName, ProductModel, TagsProducts ,CategoryProduct, BrandProduct, QuantityProduct, PriceProduct, DiscountProduct} from "../MaterialUIComponents/index"
import {MetaName, MetaKeyword, MetaDescription } from "../MaterialUIComponents/index"

import ImageUploader from "../../layout/ImageUploader"





class AddProduct extends Component {


    constructor(){
        super()
        this.state={
            isLoading: true,
            tags_db: null,
            brand_db: null,
            category_db: null,
            tags:[],
            category:"",
            brand:"",
            product_model: "",
            product_title: "",
            price: "",
            quantity: "",
            discount: "",
            image: "",
            meta_keywords: "",
            meta_description: "",
            meta_name: "",
            long_desc_product:"",
            short_desc_product:""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleCkeditorStateLong = this.handleCkeditorStateLong.bind(this)
        this.handleCkeditorStateShort = this.handleCkeditorStateShort.bind(this)

    }
    

    async componentDidMount(){
        const url_tags = "http://fva-backend-dev.herokuapp.com/api/shop/tag/"
        const url_brands = "http://fva-backend-dev.herokuapp.com/api/shop/brand/"
        const url_categories = "http://fva-backend-dev.herokuapp.com/api/blog/category/"
        
        try{
            const [tags_db, category_db, brand_db] = await Promise.all([
                (await fetch(url_tags)).json(),
                (await fetch(url_categories)).json(),
                (await fetch(url_brands)).json()
            ])
            this.setState({
                isLoading: false,
                tags_db: tags_db.results,
                category_db: category_db.results,
                brand_db: brand_db.results
            })

        } catch(err){
            console.log(err)
        }
        
       
    }


     addProduct(){
        const url = "http://fva-backend-dev.herokuapp.com/api/shop/product/"
        
         fetch(url,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body : JSON.stringify(this.state)
        })
        .then(()=>{
            console.log("added success")
        })
        .catch(err=>{
            console.log(err)
        })
 

    }

 

    handleCkeditorStateLong=(event,editor)=>{
        const data = editor.getData();
        this.setState({
            long_desc_product:data.replace(/<[^>]*>?/gm, '')
        })
    }

    handleCkeditorStateShort=(event,editor)=>{
        const data = editor.getData();
        this.setState({
            short_desc_product:data.replace(/<[^>]*>?/gm, '')
        })
    }

    handleChange(e,payload){
        const {name, value} = e.target
        if(name){
            this.setState({
                [name] : value
            })
        }else{
            if(typeof payload === "string"){
                this.setState({
                    [payload] : value
                })
            }else{
                this.setState({
                    tags : payload
                })
            }
            
                
        }
       
    }


    render(){
        const {tags_db, category_db, brand_db, isLoading} = this.state
        console.log(this.state)

        if(isLoading || !tags_db || !category_db || !brand_db ){
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
                                    <ProductName 
                                        handleChange={this.handleChange}
                                        value={this.state.product_title}  
                                    />
                                </div>
            
            
                                <div className="field label-input">
                                    <ProductModel 
                                        value={this.state.product_model}  
                                        handleChange={this.handleChange}
                                    />
                                </div>
            
                                <div className="field label-input">
                                   <QuantityProduct 
                                        value={this.state.quantity}  
                                        handleChange={this.handleChange}
                                />
                                </div>
            
                                <div className="field label-input">
                                    <PriceProduct 
                                        value={this.state.price}  
                                        handleChange={this.handleChange}
                                    />                        
                                </div>
            
                                <div className="field label-input">
                                    <TagsProducts 
                                        handleChange={this.handleChange}
                                        tags={tags_db} 
                                    />
                                </div>
            
                                <div className="field label-input">
                                    <CategoryProduct 
                                        handleChange={this.handleChange}
                                        categories={category_db} 
                                    />
                                </div>
            
                                <div className="field label-input">
                                    <BrandProduct 
                                        handleChange={this.handleChange}
                                        brands={brand_db} 
                                    />
                                </div>
            
                                <div className="field label-input">
                                    <DiscountProduct 
                                        value={this.state.discount}  
                                        handleChange={this.handleChange}
                                    />
                                </div>
            
            
                                <div className="label-input">
                                    <CKEditor
                                            config={{placeholder: "Short Description"}}
                                            editor={ClassicEditor}
                                            onInit={editor=>{
                                            }}
                                            onChange={this.handleCkeditorStateShort}
                                        />  
                                </div>
            
                                <div className="label-input">
                                    <CKEditor
                                        config={{placeholder: "Long Description"}}
                                        editor={ClassicEditor}
                                        onInit={editor=>{
                                        }}
                                        onChange={this.handleCkeditorStateLong}
                                    />  
                                </div>
            
                                <div className="field label-input">
                                    <ImageUploader  handleChange={this.handleChange} />
                                </div>
            
            
                            </div>
            
            
                    
                            <div className="side side-second">
                               
                                <div style={{marginBottom:"3rem"}} className="label-input">
                                    <MetaName 
                                     value={this.state.meta_name} 
                                     handleChange={this.handleChange} />
                                </div>
            
                                <div style={{marginBottom:"3rem"}} className="label-input">
                                    <MetaKeyword 
                                     value={this.state.meta_keywords} 
                                     handleChange={this.handleChange} />
                                </div>
            
                                <div style={{marginBottom:"3rem"}} className="label-input">
                                    <MetaDescription 
                                     value={this.state.meta_description} 
                                     handleChange={this.handleChange} /> 
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
