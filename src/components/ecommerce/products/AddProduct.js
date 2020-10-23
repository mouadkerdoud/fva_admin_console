import React,{Component} from 'react'
import axios from "axios"

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
            tags:"",
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


      addProduct(e){
        e.preventDefault();
        const url = "http://fva-backend-dev.herokuapp.com/api/shop/product/"
        const formData = new FormData();

        formData.append("product_title", this.state.product_title);
        formData.append("product_model", this.state.product_model);
        formData.append("price", this.state.price);
        formData.append("quantity", this.state.quantity);
        formData.append("image", this.state.image);
        formData.append("tags",this.state.tags)
        formData.append("brand", this.state.brand);
        formData.append("category", this.state.category);
        formData.append("discount", this.state.discount);
        formData.append("meta_keywords", this.state.meta_keywords);
        formData.append("meta_name", this.state.meta_name);
        formData.append("meta_description", this.state.meta_description);
        formData.append("long_desc_product", this.state.long_desc_product);
        formData.append("short_desc_product", this.state.short_desc_product);

        
        axios.post(url, formData)
        .then(()=>{
            this.props.history.push("/products")
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
        let {value} = e.target
        value=parseInt(value)
        this.setState({
           discount : value
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
            category:value.id
        })
    }

    handleBrands(e,value){
        this.setState({
            brand:value.id
        })    
    }

    handleTags(e,values){
       
        
        this.setState({
            tags:values
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
            
                    <form encType="multipart/form-data" onSubmit={this.addProduct} >
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
            
                                <input type="submit" value="Add Product" className="btn" />
            
                            </div>
            
            
            
                        </div>
                    </form>
                </div>
            
            
              )
        }
        
    }
    
  
}

export default AddProduct
