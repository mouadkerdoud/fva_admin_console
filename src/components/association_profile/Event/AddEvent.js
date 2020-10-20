import React from 'react'
import "./Event.css"

/* CKEditor */
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"
 

// MATERIAL UI
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';


class AddEvent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            title:'',
            short_description:'',
            description:'',
            price:'',
            is_paid:'select',
            start_at:'',
            end_at:'',
            reserve_before:'',
            meta_title:'',
            meta_description:'',
            meta_keyword:''  
        }
    }

    Create(){
        console.log(this.state);
        const url = "http://fva-backend-dev.herokuapp.com/api/app/event/"
        fetch(url,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        })
        .then((result)=>{
            result.json().then((resp)=>{
                alert('Event has been success');
            })
        })         
    }

    handleCkeditorState=(event,editor)=>{
        const data = editor.getData();
        
        this.setState({
            description:data.replace(/<[^>]*>?/gm, '')
        })
    }
    render(){

        return (
            <div className="container">
                <h1>Add Event</h1>
    
                <form >
                    <div className="addcategory-page-container">
    
    
                        <div className="side">
    
                            <div className="field label-input">
                            <TextField
                                    id="standard-multiline-flexible"
                                    label="Event Title"
                                    multiline
                                    rowsMax={4}
                                    onChange={(e)=>{this.setState({title:e.target.value})}}
                                />
                            </div>

                            <div className="field label-input short">
                                <TextField
                                    id="shortdescription"
                                    label="Short Desctiption"
                                    multiline
                                    variant="outlined"
                                    rowsMax={4}
                                   onChange={(e)=>{this.setState({short_description:e.target.value})}}
                                />
                            </div>
                            <div className="label-input">
                                <CKEditor
                                    config={{placeholder: "Description"}}
                                    editor={ClassicEditor}
                                    onInit={editor=>{
                                    }}
                                    onChange={this.handleCkeditorState}
                                />  
                            </div>
    
    
                            <div className="field label-input">
                                <FormControl>
                                    <InputLabel>Select If the event is paid</InputLabel>
                                    <Select onChange={(e)=>{this.setState({is_paid:e.target.value})}}>
                                            <MenuItem value={true}>True</MenuItem>
                                            <MenuItem value={false}>False</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
    
                            <div  className="field label-input">
                            <TextField
                                id="standard-number"
                                label="Price Event"
                                type="number"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">$</InputAdornment>,
                                }}
                                onChange={(e)=>{this.setState({price:e.target.value})}}
                            /> 
                            </div>
    
                        </div>
    
    
                         <div className="side side-second">
                        
                         <div className="field label-input">
                            <TextField
                                id="datetime-local"
                                label="Starting Date"
                                type="datetime-local"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(e)=>{this.setState({start_at:e.target.value})}}
                                />
                            </div>
    
                            <div className="field label-input">
                                <TextField
                                    id="datetime-local"
                                    label="Ending Date"
                                    type="datetime-local"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={(e)=>{this.setState({end_at:e.target.value})}}

                                />
                            </div>   
                            
                            <div className="field label-input">
                                    <TextField
                                        id="datetime-local"
                                        label="Reserving Date"
                                        type="datetime-local"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={(e)=>{this.setState({reserve_before:e.target.value})}}
                                    />
                            </div> 

                            <div style={{marginBottom:"3rem"}} className="label-input">
                                <TextField
                                    id="standard-multiline-flexible"
                                    placeholder="Meta Title"
                                    multiline
                                    rowsMax={4}
                                    onChange={(e)=>{this.setState({meta_title:e.target.value})}}
                                />
                            </div>
    
                            <div style={{marginBottom:"3rem"}} className="label-input meta_DK">
                                <TextField
                                    id="outlined-textarea"
                                    placeholder="Meta Keywords"
                                    multiline
                                    variant="outlined"
                                    rowsMax={4}
                                    onChange={(e)=>{this.setState({meta_keyword:e.target.value})}}
                                />
                            </div>
    
                            <div style={{marginBottom:"3rem"}} className="label-input meta_DK">
                                <TextField
                                    id="outlined-textarea"
                                    placeholder="Meta Description"
                                    multiline
                                    variant="outlined"
                                    rowsMax={4}
                                    onChange={(e)=>{this.setState({meta_description:e.target.value})}}
                                />
                            </div>
    
                            <button type="button" className="btn" onClick={()=>{this.Create()}}>Add Event</button>
    
                        </div>
    
                    </div>
                </form>
            </div>
        )    
    }
}

export default AddEvent
