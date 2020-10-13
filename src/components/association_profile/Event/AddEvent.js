import React from 'react'
import "./Event.css"

/* CKEditor */
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"
 

// MATERIAL UI
import {EventTitle, IsPaid, PriceEvent, StartDate, EndDate, ReserveDate} from "../MaterialUIComponents/index"
import {MetaName, MetaKeyword, MetaDescription } from "../MaterialUIComponents/index"


const AddEvent = () => {
    
    
    return (
        <div className="container">
            <h1>Add Event</h1>

            <form >
                <div className="addcategory-page-container">


                    <div className="side">

                        <div className="field label-input">
                            <EventTitle />
                        </div>

                        <div className="label-input">
                            <CKEditor
                                        config={{placeholder: "Description"}} 
                                        editor={ClassicEditor}
                                        onInit={editor=>{
                                        }}
                            />
                        </div>


                        <div className="field label-input">
                            <IsPaid />
                        </div>

                        <div  className="field label-input">
                            <PriceEvent />
                        </div>


                        <div className="field label-input">
                            <StartDate />
                        </div>

                        <div className="field label-input">
                            <EndDate />
                        </div>   
                        
                        <div className="field label-input">
                           <ReserveDate />
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

                        <button className="btn">Add Event</button>

                    </div>



                </div>
            </form>
        </div>
    )
}

export default AddEvent
