import React, {Component} from 'react'

// CKEDITOR
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"


// MaterialUI
import {CategoryName, MetaName, MetaKeyword, MetaDescription } from "../MaterialUIComponents/index"

import "./Category.css"




class  AddCategoryProduct extends Component {

    constructor(){
        super()
        this.state={
            category_title:"",
            category_description:"",
            meta_title:"",
            meta_description:"",
            meta_keyword:"",
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleCkeditorState = this.handleCkeditorState.bind(this)
        this.addCategory = this.addCategory.bind(this)
    }
  
    

     handleChange(e){
        const {name,value} =  e.target
        this.setState({
            [name] : value
        })
    }

    handleCkeditorState=(event,editor)=>{
        const data = editor.getData();
        
        this.setState({
            category_description:data.replace(/<[^>]*>?/gm, '')
        })
    }

  
    async addCategory(){
        const url = "http://fva-backend-dev.herokuapp.com/api/shop/category/"
        await fetch(url,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        })
        console.log(this.history.pushState)

           
    }


    render(){
        return (
            <div className="container">
             <h1>Add Category Product </h1>
    
            <form >
                <div className="addcategory-page-container">
    
                    <div className="side">
    
                        <div style={{marginBottom:"3rem"}} className="field label-input">
                            <CategoryName handleChange={this.handleChange} />
                        </div>
    
                        <div className="field label-input">
                            <CKEditor
                                        config={{placeholder: "Category Description"}} 
                                        editor={ClassicEditor}
                                        onInit={editor=>{
                                        }}
                                        onChange={this.handleCkeditorState}

                            />
                        </div>
    
                       
                        
                    </div>
    
                    <div className="side side-second">
                        
                        <div style={{marginBottom:"3rem"}} className="label-input">
                            <MetaName handleChange={this.handleChange} />
                        </div>
    
                        <div style={{marginBottom:"3rem"}} className="label-input">
                            <MetaKeyword handleChange={this.handleChange} />
                        </div>
    
                        <div style={{marginBottom:"3rem"}} className="label-input">
                            <MetaDescription handleChange={this.handleChange} /> 
                        </div>
    
                        <button type="button" className="btn" onClick={()=>{this.addCategory()}}>Add Category Product</button>
                    </div>
    
                </div>
            </form>
        </div>
        )
    }
   
}

export default AddCategoryProduct

