import React from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import src from '../MaterialUIComponents/image/avatar.jpg'
                                //EVENTS FORM
                                
    //REGULAR
    const styles = theme => ({
        input: {
        height: 120
        },
    });
    
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

    export const Address = withStyles(styles)(props =>  {
         
        return (
            <TextField
                id="address"
                placeholder="Address"
                multiline
                style={{ width: 555 }}
                variant="outlined"
                rowsMax={4}
            />
        )
    }) 

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
    

    /* Setting */
    export const AssociationName = () => {
      
        return (
            <TextField
              id="assname"
              label="Association Name*"
              type="text"
              variant="outlined"
              style={{ width: 270}}
              value="Future Vision Association"
              InputLabelProps={{
                shrink: true,
              }}
            />
        );
      }

    export const EmailA = () => {
      
        return (
            <TextField
              id="email"
              label="Email*"
              type="email"
              variant="outlined"
              style={{ width: 270 }}
              value="fva@gmail.com"
              InputLabelProps={{
                shrink: true,
              }}
            />
        );
      }
    export const Phone = () => {
      
        return (
            <TextField
              id="number"
              label="Phone Number*"
              type="number"
              variant="outlined"
              style={{ width: 270 }}
              value="0537849143"
              InputLabelProps={{
                shrink: true,
              }}
            />
        );
      }

      export const Fax = () => {
      
        return (
            <TextField
              id="fax"
              label="Fax"
              type="number"
              variant="outlined"
              style={{ width: 270 }}
              value="55487910"
              InputLabelProps={{
                shrink: true,
              }}
            />
        );
      }      

      export const AddressA = () => {
      
        return (
            <TextField
              id="address"
              label="Address*"
              type="text"
              multiline
              variant="outlined"
              style={{ width: 270 }}
              value="Rue something, somewhere"
              InputLabelProps={{
                shrink: true,
              }}
            />
        );
      }

      export const CountryA = () => {
        const country = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

        return (
           <>
            <Autocomplete
                id="countrya"
                options={country}
                value="Morocco"
                variant="outlined"
                style={{ width: 270 }}
                renderInput={(params) => <TextField {...params} label="Country" variant="outlined" />}
            />
           </>

        );
      }

      export const CityA = () => {
        const city=["Tanger","Asila","Mekness","Rabat","Sale","Asfi","Marrakech","Agadir","Taza","Fes","Tetouane","Layounne","Khenifra","Kelmime","Ouzzane"];

        return (
            <>
            <Autocomplete
                    id="cityA"
                    options={city}
                    value="Rabat"
                    variant="outlined"
                    style={{ width: 270 }}
                    renderInput={(params) => <TextField {...params} label="City" variant="outlined" />}
                />
            </>
        );
      }

      export const FacebookLink = () => {
      
        return (
            <TextField
              id="facebook"
              label="Facebook Link*"
              type="text"
              variant="outlined"
              style={{ width: 270 }}
              value="fb/someassociation.com"
              InputLabelProps={{
                shrink: true,
              }}
            />
        );
      }

      export const InstagramLink = () => {
      
        return (
            <TextField
              id="instagrame"
              label="Instagram Link*"
              type="text"
              variant="outlined"
              style={{ width: 270 }}
              value="ig/someassociation.com"
              InputLabelProps={{
                shrink: true,
              }}
            />
        );
      }

      export const LinkedinLink = () => {
      
        return (
            <TextField
              id="linkedin"
              label="Linkedin Link*"
              type="text"
              variant="outlined"
              style={{ width: 270 }}
              value="lkdin/someassociation.com"
              InputLabelProps={{
                shrink: true,
              }}
            />
        );
      }

      export const AssociationDescription = withStyles(styles)(props =>  {
        const { classes } = props;

        return (
            <TextField
                id="associationd"
                placeholder="blah blah blah"
                multiline
                style={{ width: 270 }}
                variant="outlined"
                rowsMax={4}
                InputProps={{
                    className: classes.input
                }}
            />
        )
    })

    export const AboutUs = withStyles(styles)(props =>  {
        const { classes } = props;

        return (
            <TextField
                id="aboutUs"
                placeholder="About Us"
                multiline
                style={{ width: 270 }}
                variant="outlined"
                rowsMax={4}
                InputProps={{
                    className: classes.input
                }}
            />
        )
    })

        /* Setting User */
        export const FirstNameU = () => {
      
            return (
                <TextField
                  id="firstname"
                  label="First Name*"
                  type="text"
                  variant="outlined"
                  style={{ width: 270}}
                  value="Aissam"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
            );
          }

          export const LastNameU = () => {
      
            return (
                <TextField
                  id="lastname"
                  label="Last Name*"
                  type="text"
                  variant="outlined"
                  style={{ width: 270}}
                  value="Jedli"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
            );
          }
    
          export const EmailUser = () => {
      
            return (
                <TextField
                  id="emailU"
                  label="Email*"
                  type="email"
                  variant="outlined"
                  style={{ width: 270 }}
                  value="aissamjedli@gmail.com"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
            );
          }

          export const PasswordUser = () => {

            return (
                    <TextField
                        id="passworduser"
                        label="Password*"
                        style={{ width: 270 }}
                        variant="outlined"
                        value="aissamjedli"
                        type="password"
                    />
            )
        }
    
        export const ConfirmPasswordUser = () => {
    
            return (
                    <TextField
                        id="cpassworduser"
                        label="Confirme Password*"
                        type="password"
                        variant="outlined"
                        style={{ width: 270 }}
                        value="aissamjedli"
                    />
            )
        }  
        export const PhoneUser = () => {
          
            return (
                <TextField
                  id="number"
                  label="Phone Number*"
                  type="number"
                  variant="outlined"
                  style={{ width: 270 }}
                  value="0637849143"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
            );
          }

          export const DateUser = () => {
      
            return (
                <TextField
                  id="dateuser"
                  label="Date Birthday*"
                  type="text"
                  value="05/10/2020"
                  variant="outlined"
                  style={{ width: 270 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
            );
          } 
         
    export const CountryUser = () => {
        const country = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

        return (
           <>
            <Autocomplete
                id="countrya"
                options={country}
                value="Morocco"
                variant="outlined"
                style={{ width: 270 }}
                renderInput={(params) => <TextField {...params} label="Country" variant="outlined" />}
            />
           </>

        );
      }

      export const CityUser = () => {
        const city=["Tanger","Asila","Casa","Mekness","Rabat","Sale","Asfi","Marrakech","Agadir","Taza","Fes","Tetouane","Chefchoune","Meknes","Fes","Tata","Layounne","Khenifra","Kelmime","Ouzzane"];

        return (
            <>
            <Autocomplete
                    id="cityA"
                    options={city}
                    value="Casa"
                    variant="outlined"
                    style={{ width: 270 }}
                    renderInput={(params) => <TextField {...params} label="City" variant="outlined" />}
                />
            </>
        );
      }      

      export const RoleUser = () => {

        const role = ['Admin', 'User'];

        return (
            <>
                <Autocomplete
                    id="controllable-states-demo"
                    options={role}
                    value="Admin"
                    style={{ width: 270 }}
                    renderInput={(params) => <TextField {...params} label="Role" variant="outlined" />}
                />

            </>
        )
    }

    export const AddressUser = () => {
      
        return (
            <TextField
              id="addressuser"
              label="Address*"
              type="text"
              variant="outlined"
              style={{ width: 555 }}
              rowsMax={4}
              multiline
              value="Rue something, somewhere"
              InputLabelProps={{
                shrink: true,
              }}
            />
        );
      }
    //METAS   

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



/* Avatars */
const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

 
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function BadgeAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src={src} />
      </StyledBadge>
    </div>
  );
}
/* Modal */
/* 
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.47)',
    top: '0',
    left: '0',
     overflow: 'auto'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" id="test" className="login" onClick={handleOpen}>
      Change Password
      </button>
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
        <div className={classes.paper}>
        <div className="modal-box">
            <span className="close">&times;</span>
            <form action="" className="login-box">
              <h1> Change Or Recover Your Password: </h1>
                <label htmlFor="">Current Password </label>
                <input type="password" className="name"  required />
                <label htmlFor="">New Password </label>
                <input type="password" className="password" required />
                <label htmlFor="">Verify  Password </label>
                <input type="password" className="password" required />
                <button className="login-button">Save Change</button>
                <div className="close-forgot">
                    <button className="cancel">Cancel</button>
                </div>
            </form>
        </div>
    </div>
        </Fade>
      </Modal>
    </div>
  );
} */
