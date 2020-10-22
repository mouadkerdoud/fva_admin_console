import React,{Component} from 'react'

/* CKEditor */
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"


// Material UI
import {ProductName, ImageProduct,ProductModel, TagsProducts ,CategoryProduct, BrandProduct, QuantityProduct, PriceProduct, DiscountProduct} from "../MaterialUIComponents/index"
import {MetaName, MetaKeyword, MetaDescription } from "../MaterialUIComponents/index"

// import ImageUploader from "../../layout/ImageUploader"





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
            discount: {
                coupon_code: 0,
                date_beginning: "2020-10-22T14:31:23.756Z",
                date_expired: "2020-10-22T14:31:23.756Z",
                type_discount: "string",
                value: 0,
                created_at: "2020-10-22T14:31:23.756Z",
                updated_by: 0,
                shopping_cart: 0
              },
            image: "",
            meta_keywords: "",
            meta_description: "",
            meta_name: "",
            long_desc_product:"",
            short_desc_product:""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleDiscount = this.handleDiscount.bind(this)
        this.handleTags = this.handleTags.bind(this)
        this.handleBrands = this.handleBrands.bind(this)
        this.handleCategories = this.handleCategories.bind(this)
        this.handleCkeditorStateLong = this.handleCkeditorStateLong.bind(this)
        this.handleCkeditorStateShort = this.handleCkeditorStateShort.bind(this)
        this.handleImage = this.handleImage.bind(this)
        this.addProduct = this.addProduct.bind(this)

    }
    

    async componentDidMount(){
        const url_tags = "http://fva-backend-dev.herokuapp.com/api/shop/tag/"
        const url_brands = "http://fva-backend-dev.herokuapp.com/api/shop/brand/"
        const url_categories = "http://fva-backend-dev.herokuapp.com/api/shop/category/"
        
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
            body: JSON.stringify(this.state)
        })
        .then((result)=>{
            result.json().then((resp)=>{
                alert('product has been added');
            })
        })
        .catch(err=>{
            console.log(err)
        })
      

    }

    handleChange(e,payload){
        let {name, value} = e.target
        if(name === "quantity" || name === "price"){
            value = parseFloat(value,10)
            this.setState({
                [name] : value
            })
        }else{
            this.setState({
                [name] : value
            })
        }
        
    }
 
    handleDiscount(e){
        this.setState({
            discount: {
                coupon_code: parseInt(e.target.value),
                date_beginning: "2020-10-22T14:31:23.756Z",
                date_expired: "2020-10-22T14:31:23.756Z",
                type_discount: "string",
                value: 0,
                created_at: "2020-10-22T14:31:23.756Z",
                updated_by: 0,
                shopping_cart: 0
              }
        })
    }

    handleCkeditorStateLong(event,editor){
        const data = editor.getData();
        this.setState({
            long_desc_product:data.replace(/<[^>]*>?/gm, '')
        })
    }

    handleCkeditorStateShort(event,editor){
        const data = editor.getData();
        this.setState({
            short_desc_product:data.replace(/<[^>]*>?/gm, '')
        })
    }

    handleCategories(e,value){
        this.setState({
            category:value
        })
    }

    handleBrands(e,value){
        this.setState({
            brand:value
        })    
    }

    handleTags(e,value){
        this.setState({
            tags:value
        })
    }



    handleImage(event){
        this.setState({
            image: event.target.files[0]
        })
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
            
                    <form  >
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
                                        handleTags={this.handleTags}
                                        tags={tags_db} 
                                    />
                                </div>
            
                                <div className="field label-input">
                                    <CategoryProduct 
                                        handleCategories={this.handleCategories}
                                        categories={category_db} 
                                    />
                                </div>
            
                                <div className="field label-input">
                                    <BrandProduct 
                                        handleBrands={this.handleBrands}
                                        brands={brand_db} 
                                    />
                                </div>
            
                                <div className="field label-input">
                                    <DiscountProduct 
                                        value={this.state.discount}  
                                        handleDiscount={this.handleDiscount}
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
                                    <ImageProduct handleImage={this.handleImage} />
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
            
                                <button type="button" className="btn" onClick={()=>{this.addProduct()}}>Add Product</button>
            
                            </div>
            
            
            
                        </div>
                    </form>
                </div>
            
            
              )
        }
        
    }
    
  
}

export default AddProduct
