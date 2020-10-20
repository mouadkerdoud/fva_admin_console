import React from 'react'
import Moment from 'moment';

/* Style */
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
/**
* @author
* @class EditEvent
**/

class EditEvent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            title:'',
            description:'',
            short_description:'',
            price:'',
            is_paid:'select',
            start_at:'',
            end_at:'',
            reserve_before:'',
            meta_title:'',
            meta_description:'',
            met_keyword:''  
        }
    }
    componentDidMount(){
        const url = "http://fva-backend-dev.herokuapp.com/api/app/event/"+this.props.match.params.id
        fetch(url).then((response)=>{
          response.json().then((result)=>{
            this.setState({
              id:result.id,
              title:result.title,
              description:result.description,
              short_description:result.short_description,
              is_paid:result.is_paid,
              price:result.price,
              start_at:Moment(result.start_at).format('YYYY-MM-DDThh:mm:ssZ'),
              end_at:Moment(result.end_at).format('YYYY-MM-DDThh:mm:ssZ'),
              reserve_before:Moment(result.reserve_before).format('YYYY-MM-DDThh:mm:ssZ'),
              meta_title:result.meta_title,
              meta_description:result.meta_description,
              met_keyword:result.met_keyword
            })
          })
        }) 
        
    }
    Update(){
        console.log(this.state);
        const url = "http://fva-backend-dev.herokuapp.com/api/app/event/"+this.state.id+"/"
        fetch(url,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        })
        .then((result)=>{
            result.json().then((resp)=>{
                alert('Event has been Edited');
            })
        })
        window.location.href = "/Event";
      }
      handleCkeditorState=(event,editor)=>{
        const data = editor.getData();
        
        this.setState({
            description:data.replace(/<[^>]*>?/gm, '')
        })
    }
 render() {
  return(
    <div className="container">
                <h1>Edit Event</h1>
    
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
                                    value={this.state.title}
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
                                   value={this.state.short_description}
                                />
                            </div>
                            <div className="label-input">
                                <CKEditor
                                    config={{placeholder: "Description"}}
                                    data={this.state.description}
                                    editor={ClassicEditor}
                                    onInit={editor=>{
                                    }}
                                    onChange={this.handleCkeditorState}
                                />  
                            </div>
    
    
                            <div className="field label-input">
                                <FormControl>
                                    <InputLabel>Select If the event is paid</InputLabel>
                                    <Select onChange={(e)=>{this.setState({is_paid:e.target.value})}} value={this.state.is_paid}>
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
                                value={this.state.price}
                            /> 
                            </div>
    
                        </div>
    
    
                         <div className="side side-second">
                        
                         <div className="field label-input">
                            <TextField
                                id="datetime-local"
                                label="Starting Date"
                                type="datetime"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(e)=>{this.setState({start_at:e.target.value})}}
                                value={this.state.start_at}
                                />
                            </div>
    
                            <div className="field label-input">
                                <TextField
                                    id="datetime-local"
                                    label="Ending Date"
                                    type="datetime"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={(e)=>{this.setState({end_at:e.target.value})}}
                                    value={this.state.end_at}
                                />
                            </div>   
                            
                            <div className="field label-input">
                                    <TextField
                                        id="datetime"
                                        label="Reserving Date"
                                        type="datetime"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={(e)=>{this.setState({reserve_before:e.target.value})}}
                                        value={this.state.reserve_before}
                                    />
                            </div> 

                            <div style={{marginBottom:"3rem"}} className="label-input">
                                <TextField
                                    id="standard-multiline-flexible"
                                    placeholder="Meta Title"
                                    multiline
                                    rowsMax={4}
                                    onChange={(e)=>{this.setState({meta_title:e.target.value})}}
                                    value={this.state.meta_title}
                                />
                            </div>
    
                            <div style={{marginBottom:"3rem"}} className="label-input meta_DK">
                                <TextField
                                    id="outlined-textarea"
                                    placeholder="Meta Keywords"
                                    multiline
                                    variant="outlined"
                                    rowsMax={4}
                                    onChange={(e)=>{this.setState({met_keyword:e.target.value})}}
                                    value={this.state.met_keyword}
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
                                    value={this.state.meta_description}
                                />
                            </div>
    
                            <button type="button" className="btn" onClick={()=>{this.Update()}}>Edit Event</button>
    
                        </div>
    
                    </div>
                </form>
            </div>

    )
   }
 }


export default EditEvent