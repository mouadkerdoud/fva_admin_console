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
import InputAdornment from '@material-ui/core/InputAdornment';


class AddEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            short_description: '',
            description: '',
            price: '',
            is_paid: 'select',
            start_at: '',
            end_at: '',
            reserve_before: '',
            meta_title: '',
            met_keyword: '',
            meta_description: ''
        }

        this.addEvent = this.addEvent.bind(this)
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

    Create(){
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

    
    handleTitle(e){
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
    
    addEvent(e) {
        e.preventDefault();
        console.log(this.state);
        const url = 'http://fva-backend-dev.herokuapp.com/api/app/event/'
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
        form_data.append('met_keyword', this.state.met_keyword);
        form_data.append('meta_description', this.state.meta_description);

        try {
             axios.post(url, form_data)
             alert("Event Has been edited success")
             this.props.history.push("/Event") 
        } catch (err) {
            console.log(err)
        }; 

    };

    render() {

        return (
            <div className="container">
                <h1>Add Event</h1>

                <form onSubmit={this.addEvent}>
                    <div className="addcategory-page-container event">

                        <div className="side">

                            <div className="field label-input">
                                <TextField
                                    id="standard-multiline-flexible"
                                    label="Event Title"
                                    multiline
                                    rowsMax={4}
                                    onChange={this.handleTitle}
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
                                />
                            </div>
                            <div className="label-input">
                                <CKEditor
                                    config={{ placeholder: "Description" }}
                                    editor={ClassicEditor}
                                    onInit={editor => {
                                    }}
                                    onChange={this.handleCkeditorState}
                                />
                            </div>


                            <div className="field label-input">
                                <FormControl>
                                    <InputLabel>Select If the event is paid</InputLabel>
                                    <Select onChange={this.handleSelect}>
                                        <MenuItem value={true}>True</MenuItem>
                                        <MenuItem value={false}>False</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>

                            <div className="field label-input">
                                <TextField
                                    id="standard-number"
                                    label="Price Event"
                                    type="number"
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">$</InputAdornment>,
                                    }}
                                    onChange={this.handlePrice}
                                />
                            </div>

                        </div>


                        <div className="side side-second event">

                            <div className="field label-input">
                                <TextField
                                    id="datetime-local"
                                    label="Starting Date"
                                    type="datetime-local"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={this.handleStartE}
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
                                    onChange={this.handleReserveB}
                                />
                            </div>

                            <div style={{ marginBottom: "3rem" }} className="label-input">
                                <TextField
                                    id="standard-multiline-flexible"
                                    placeholder="Meta Title"
                                    multiline
                                    rowsMax={4}
                                    onChange={this.handleMetaTitle}
                                />
                            </div>

                            <div style={{ marginBottom: "3rem" }} className="label-input meta_DK">
                                <TextField
                                    id="outlined-textarea"
                                    placeholder="Meta Keywords"
                                    multiline
                                    variant="outlined"
                                    rowsMax={4}
                                    onChange={this.handleMetaKeywords}
                                />
                            </div>

                            <div style={{ marginBottom: "3rem" }} className="label-input meta_DK">
                                <TextField
                                    id="outlined-textarea"
                                    placeholder="Meta Description"
                                    multiline
                                    variant="outlined"
                                    rowsMax={4}
                                    onChange={this.handleMetaDescription}
                                />
                            </div>

                            <button type="submit" className="btn btn-assoc" >Add Event</button>

                        </div>

                    </div>
                </form>
            </div>
        )
    }
}

export default AddEvent
