import React from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { withStyles } from "@material-ui/core/styles";



                                //EVENTS FORM

    //REGULAR

    /* User */

    export const FirstName = () => {

        return (
                <TextField
                    id="FirstName"
                    label="First Name"
                    type="text"
                />
        )
    } 

    export const LastName = () => {

        return (
                <TextField
                    id="LastName"
                    label="Last Name"
                    type="text"
                />
        )
    }
    export const Emails = () => {

        return (
                <TextField
                    id="email"
                    label="Enter Email"
                    type="text"
                />
        )
    }
    export const Password = () => {

        return (
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                />
        )
    }

    export const ConfirmPassword = () => {

        return (
                <TextField
                    id="cpassword"
                    label="Confirme Password"
                    type="password"
                />
        )
    }

    export const PhoneNumber = () => {

        return (
                <TextField
                    id="PhoneNumber"
                    label="Phone Number"
                    type="number"
                />
        )
    }
    export const Role = () => {

        const role = ['Admin', 'User'];

        return (
            <>
                <Autocomplete
                    id="controllable-states-demo"
                    options={role}
                    style={{ width: 260 }}
                    renderInput={(params) => <TextField {...params} label="Role" variant="outlined" />}
                />

            </>
        )
    }

    export const Country = () => {

        const country = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

        return (
            <>
                <Autocomplete
                    id="country"
                    options={country}
                    style={{ width: 260 }}
                    renderInput={(params) => <TextField {...params} label="Country" variant="outlined" />}
                />

            </>
        )
    }

    export const City = () => {
        const city=["Tanger","Asila","Mekness","Rabat","Sale","Asfi","Marrakech","Agadir","Taza","Fes","Tetouane","Layounne","Khenifra","Kelmime","Ouzzane"];

        return (
            <>
                <Autocomplete
                    id="city"
                    options={city}
                    style={{ width: 260 }}
                    renderInput={(params) => <TextField {...params} label="city" variant="outlined" />}
                />

            </>
        )
    }
    export const DateBirthday = () => {
      
        return (
            <TextField
              id="datebirthday"
              label="Date Birthday"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
        );
      }
    /* Event  */ 

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
      
    /* Realisation */
    export const RealisationTitle = () => {

        return (
                <TextField
                    id="RealisationTitle"
                    label="Realisation Title"
                    multiline
                    rowsMax={4}
                />
        )
    } 

    export const StartDateR = () => {
      
        return (
            <TextField
              id="date"
              label="Starting Date"
              type="datetime-local"
              InputLabelProps={{
                shrink: true,
              }}
            />
        );
      }

      export const EndDateR = () => {
      
        return (
            <TextField
              id="date"
              label="Ending Date"
              type="datetime-local"
              InputLabelProps={{
                shrink: true,
              }}
            />
        );
      }
      export const Place = () => {

        return (
                <TextField
                    id="place"
                    label="Place"
                    multiline
                    rowsMax={4}
                />
        )
    } 

    export const Partners = () => {

        return (
                <TextField
                    id="partners"
                    label="partners"
                    multiline
                    rowsMax={4}
                />
        )
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
