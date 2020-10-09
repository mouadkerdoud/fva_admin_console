import React from 'react'
import "./Event.css"

// import TagsInput from "../../layout/TagsInput"
/* CKEditor */
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"
 

const AddEvent = () => {
    
    
    return (
        <div className="container">
            <h1>Add Event</h1>

            <div className="formPost">
            <form class="add-product-form forms3">
                
                <div className="form-flex-items">
                    <div class="main-menu">
                        <h2 class="active"><i class="fa fa-table"></i>Event</h2>     
                    </div>
                </div> 
                <div className="field label-input mt">
                        <label className="label">Event Title*</label>
                        <input placeholder="Title..." type="text" className="data-form add-post" />
                    </div> 
                <div className="description-element label-input">
                        <label className="label">Short Description*</label>
                        <CKEditor
                                    editor={ClassicEditor}
                                    onInit={editor=>{
                                    }}
                        />
                    </div>
                    
                    <div className="category-element label-input">
                        <label className="label">Is Paid*</label>
                        <select className="moy-selec">
                            <option value="" disabled selected>Select Is_Paid...</option>
                            <option>True</option>
                            <option>Flase</option>
                        </select>
                    </div>
                    <div className="category-element label-input">
                        <label className="label">Price*</label>
                        <input class="number" type="number" min="0" max="1000000" step="1"  />
                    </div>
                    <div className="category-element label-input">
                        <label className="label">Start Event*</label> 
                        <div className="timer">
                            <input className="inp" type="date" name="startEvent" id="startEvent" />
                            <input type="time" value="13:30"/>
                        </div>
                    </div>
                    <div className="category-element label-input">
                        <label className="label">End Event*</label> 
                        <div className="timer">
                            <input className="inp" type="date" name="startEvent" id="startEvent" />
                            <input type="time" value="13:30"/>
                        </div>
                    </div>   
                    <div className="category-element label-input">
                        <label className="label">Reserve Before*</label> 
                        <div className="timer">
                            <input className="inp" type="date" name="startEvent" id="startEvent" />
                            <input type="time" value="13:30"/>
                        </div>
                    </div>                     
            </form>
            <form class="add-product-form forms4">
                    
                    <div className="form-flex-items">
                        <div class="main-menu">
                            <h2 class="active"><i class="fa fa-briefcase"></i>Meta</h2>     
                        </div>
                        <div className="field label-input">
                            <label className="label">Meta Title*</label>
                            <input placeholder="Title..." type="text" className="data-form add-meta" />
                        </div>
                        </div>
                        <div className="description-element label-input">
                            <label className="label">Meta Keywords:  *</label>
                            <textarea placeholder="Meta Keywords..." rows="10" className="add-meta" />

                        </div>
                        <div className="description-element label-input">
                            <label className="label">Meta Description:  *</label>
                            <textarea placeholder="Meta description..." rows="10" className="add-meta" />
                        </div>
                                          
            </form>

            </div>
            <form class="add-product-form formsbtn">
                <button className="btn btn-add-prod">Add Event</button>
            </form>

        </div>
    )
}

export default AddEvent
