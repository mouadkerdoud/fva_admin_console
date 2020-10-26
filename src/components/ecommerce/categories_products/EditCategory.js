import React, {Component} from 'react'

// CKEDITOR
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"


// MaterialUI
import {CategoryNameEdit, MetaNameEdit, MetaKeywordEdit, MetaDescriptionEdit} from "../MaterialUIComponents/index"

import "./Category.css"




class  EditCategory extends Component {

    constructor(props){
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
        this.editCategory = this.editCategory.bind(this)
    }

    componentDidMount(){
        const url = "http://fva-backend-dev.herokuapp.com/api/shop/category/"+this.props.match.params.id
        fetch(url).then((response)=>{
          response.json().then((result)=>{
            this.setState({
              id:result.id,
              category_title:result.category_title,
              category_description:result.category_description,
              meta_title:result.meta_title,
              meta_description:result.meta_description,
              meta_keyword:result.meta_keyword,
             
            })
          })
        }) 
    }
  
    async editCategory(){

        const url = "http://fva-backend-dev.herokuapp.com/api/shop/category/"+this.state.id+"/"
        await fetch(url,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        })
        this.props.history.push("/CategoriesProducts")

            
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

  
    


    render(){
        console.log(this.state)
        return (
            <div className="container">
             <h1>Add Category Product </h1>
    
            <form >
                <div className="addcategory-page-container">
    
                    <div className="side">
    
                        <div style={{marginBottom:"3rem"}} className="field label-input">
                            <CategoryNameEdit value={this.state.category_title} handleChange={this.handleChange} />
                        </div>
    
                        <div className="field label-input">
                            <CKEditor
                                         config={{placeholder: "Category Description"}}
                                         data={this.state.category_description}
                                         editor={ClassicEditor}
                                         onInit={editor=>{
                                         }}
                                         onChange={this.handleCkeditorState}

                            />
                        </div>
    
                       
                        
                    </div>
    
                    <div className="side side-second">
                        
                        <div style={{marginBottom:"3rem"}} className="label-input">
                            <MetaNameEdit value={this.state.meta_title} handleChange={this.handleChange} />
                        </div>
    
                        <div style={{marginBottom:"3rem"}} className="label-input">
                            <MetaKeywordEdit value={this.state.meta_keyword} handleChange={this.handleChange} />
                        </div>
    
                        <div style={{marginBottom:"3rem"}} className="label-input">
                            <MetaDescriptionEdit value={this.state.meta_description} handleChange={this.handleChange} /> 
                        </div>
    
                        <button type="button" className="btn" onClick={()=>{this.editCategory()}}>Edit Category</button>
                    </div>
    
                </div>
            </form>
        </div>
        )
    }
   
}

export default EditCategory

