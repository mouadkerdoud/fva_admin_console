import React from 'react'

/* Style */
import "./Event.css"

/* Axios  */
import axios from 'axios';

/* CKEditor */
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"
 

// MATERIAL UI
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Moment from 'moment';
import InputAdornment from '@material-ui/core/InputAdornment';
/**
* @author
* @class EditEvent
**/

class EditEvent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            short_description: '',
            description: '',
            descriptionE: '',
            price: '',
            is_paid: 'select',
            start_at: '',
            end_at: '',
            reserve_before: '',
            meta_title: '',
            met_keyword: '',
            meta_description: ''
        }

        this.editEvent = this.editEvent.bind(this)
        this.handleTitle = this.handleTitle.bind(this)
        this.handleShortDescription = this.handleShortDescription.bind(this)
        this.handleCkeditorState = this.handleCkeditorState.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
        this.handlePrice = this.handlePrice.bind(this)
        this.handleStartE = this.handleStartE.bind(this)
        this.handleEndE = this.handleEndE.bind(this)
        this.handleReserveB = this.handleReserveB.bind(this)
        this.handleMetaTitle = this.handleMetaTitle.bind(this)
        this.handleMetaKeywords = this.handleMetaKeywords.bind(this)
        this.handleMetaDescription = this.handleMetaDescription.bind(this)

    }

    componentDidMount(){
        const url = "http://fva-backend-dev.herokuapp.com/api/app/event/"+this.props.match.params.id
        fetch(url).then((response)=>{
          response.json().then((result)=>{
            this.setState({
              id:result.id,
              title:result.title,
              descriptionE:result.description,
              short_description:result.short_description,
              is_paid:result.is_paid,
              price:result.price,
              start_at:Moment(result.start_at).format('YYYY-MM-DDThh:mm'),
              end_at:Moment(result.end_at).format('YYYY-MM-DDThh:mm'),
              reserve_before:Moment(result.reserve_before).format('YYYY-MM-DDThh:mm'),
              meta_title:result.meta_title,
              meta_description:result.meta_description,
              met_keyword:result.met_keyword
            })
          })
        })  
    }

    handleTitle(e) {
        this.setState({ title: e.target.value })
    }

    handleShortDescription(e){
        this.setState({ short_description: e.target.value })
    }

    handleCkeditorState(event, editor) {
        const data = editor.getData();

        this.setState({
            description: data.replace(/<[^>]*>?/gm, '')
        })
    }

    handlePrice(e){
        this.setState({ price: e.target.value })
    }
    
    handleSelect(e){
        this.setState({ is_paid: e.target.value })
    }

    handleStartE(e){
        this.setState({ start_at: e.target.value })
    }
    
    handleEndE(e){
        this.setState({ end_at: e.target.value })
    }
    
    handleReserveB(e){
        this.setState({ reserve_before: e.target.value })
    }

    handleMetaTitle(e){
        this.setState({ meta_title: e.target.value })
    }

    handleMetaKeywords(e){
        this.setState({ met_keyword: e.target.value })
    }

    handleMetaDescription(e){
        this.setState({ meta_description: e.target.value })
    }
    
    editEvent(e) {
        e.preventDefault();
        console.log(this.state);
        const url = 'http://fva-backend-dev.herokuapp.com/api/app/event/'+this.state.id+"/"
        const form_data = new FormData();

        form_data.append('title', this.state.title);
        form_data.append('short_description', this.state.short_description);
        form_data.append('description', this.state.description);
        form_data.append('is_paid', this.state.is_paid);
        form_data.append('price', this.state.price);
        form_data.append('start_at', this.state.start_at);
        form_data.append('end_at', this.state.end_at);
        form_data.append('reserve_before', this.state.reserve_before);
        form_data.append('meta_title', this.state.meta_title);
        form_data.append('meta_description', this.state.meta_description);
        form_data.append('meta_keyword', this.state.meta_keyword);

        try {
             axios.put(url, form_data)
             alert("Event Has been Edited success")
             this.props.history.push("/Event");
        } catch (err) {
            console.log(err)
        }; 
    };

 render() {
  return(
    <div className="container">
                <h1>Edit Event</h1>
    
                <form onSubmit={this.editEvent}>
                    <div className="addcategory-page-container event">
    
    
                        <div className="side">
    
                            <div className="field label-input">
                            <TextField
                                    id="standard-multiline-flexible"
                                    label="Event Title"
                                    multiline
                                    rowsMax={4}
                                    onChange={this.handleTitle}
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
                                    onChange={this.handleShortDescription}
                                    value={this.state.short_description}
                                />
                            </div>
                            <div className="label-input">
                                <CKEditor
                                    config={{placeholder: "Description"}}
                                    data={this.state.descriptionE}
                                    editor={ClassicEditor}
                                    onInit={editor=>{
                                    }}
                                    onChange={this.handleCkeditorState}
                                />  
                            </div>
    
    
                            <div className="field label-input">
                                <FormControl>
                                    <InputLabel>Select If the event is paid</InputLabel>
                                    <Select onChange={this.handleSelect} value={this.state.is_paid}>
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
                                onChange={this.handlePrice}
                                value={this.state.price}
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
                                onChange={this.handleStartE}
                                value={this.state.start_at}
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
                                    onChange={this.handleEndE}
                                    value={this.state.end_at}
                                />
                            </div>   
                            
                            <div className="field label-input">
                                    <TextField
                                        id="datetime"
                                        label="Reserving Date"
                                        type="datetime-local"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={this.handleReserveB}
                                        value={this.state.reserve_before}
                                    />
                            </div> 

                            <div style={{marginBottom:"3rem"}} className="label-input">
                                <TextField
                                    id="standard-multiline-flexible"
                                    label="Meta Title"
                                    multiline
                                    rowsMax={4}
                                    onChange={this.handleMetaTitle}
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
                                    onChange={this.handleMetaKeywords}
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
                                    onChange={this.handleMetaDescription}
                                    value={this.state.meta_description}
                                />
                            </div>
    
                            <button type="submit" className="btn btn-assoc">Edit Event</button>
    
                        </div>
    
                    </div>
                </form>
            </div>

    )
   }
 }


export default EditEvent