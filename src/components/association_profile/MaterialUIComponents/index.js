import React from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { withStyles } from "@material-ui/core/styles";



                                //EVENTS FORM

    //REGULAR
    export const EventTitle = () => {

        return (
                <TextField
                    id="standard-multiline-flexible"
                    label="Event Title"
                    multiline
                    rowsMax={4}
                />
        )
    } 



    export const IsPaid = () => {

        const ispaid = ['Paid', 'Not Paid'];

        return (
            <>
                <Autocomplete
                    id="controllable-states-demo"
                    options={ispaid}
                    style={{ width: 500 }}
                    renderInput={(params) => <TextField {...params} label="Select if the event is paid" variant="outlined" />}
                />

            </>
        )
    }

 

    export const PriceEvent = () => {

        return (
                <TextField
                    id="standard-number"
                    label="Price Event"
                    type="number"
                />
        )
    } 


    export const StartDate = () => {
      
        return (
            <TextField
              id="datetime-local"
              label="Starting Date"
              type="datetime-local"
              InputLabelProps={{
                shrink: true,
              }}
            />
        );
      }

      export const EndDate = () => {
      
        return (
            <TextField
              id="datetime-local"
              label="Ending Date"
              type="datetime-local"
              InputLabelProps={{
                shrink: true,
              }}
            />
        );
      }

      export const ReserveDate = () => {
      
        return (
            <TextField
              id="datetime-local"
              label="Reserving Date"
              type="datetime-local"
              InputLabelProps={{
                shrink: true,
              }}
            />
        );
      }
      

    //METAS   

    const styles = theme => ({
        input: {
        height: 120
        },
    });


    export const MetaName = () => {
        return (
            <TextField
                id="standard-multiline-flexible"
                placeholder="Meta Name"
                multiline
                rowsMax={4}
            />
        )
    }


    export const MetaKeyword = withStyles(styles)(props =>  {
        const { classes } = props;

        return (
            <TextField
                id="outlined-textarea"
                placeholder="Meta Keywords"
                multiline
                variant="outlined"
                rowsMax={4}
                InputProps={{
                    className: classes.input
                }}
            />
        )
    })



    export const MetaDescription = withStyles(styles)(props =>  {
        const { classes } = props;

        return (
            <TextField
                id="outlined-textarea"
                placeholder="Meta Description"
                multiline
                variant="outlined"
                rowsMax={4}
                InputProps={{
                    className: classes.input
                }}
            />
        )
    })



                          
                                            //NEWS FORM

export const NewsTitle = () => {

    return (
            <TextField
                id="standard-multiline-flexible"
                label="News Title"
                multiline
                rowsMax={4}
            />
    )
} 