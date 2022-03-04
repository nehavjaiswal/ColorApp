import  React,{Component} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


 class PaletteMetaForm extends Component {
   constructor(props){
     super(props);
     this.state = {
      open : true,
      newPaletteName: ""
     } 
     this.handleChange = this.handleChange.bind(this)

    }
    componentDidMount(){
      ValidatorForm.addValidationRule('isPaletteNameUnique', value => 
      this.props.palettes.every(
      ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase()
      )
   );
  }

 handleClickOpen = () => {
    this.setState({open : true})
  };

   handleClose = () => {
    this.setState({open : false})
  };
  handleChange(evt){
    this.setState({[evt.target.name] : evt.target.value})
  }

  render() {
    const {open,newPaletteName} = this.state;
    return (
        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>Subscribe</DialogTitle>
          <ValidatorForm onSubmit={() => this.props.handleSubmit(newPaletteName)}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your new beautiful palette. Make 
              sure it's unique!!

            </DialogContentText>
                        <TextValidator
                            label= "Palette Name"
                            name= "newPaletteName"
                            fullWidth
                            margin = "normal"
                            onChange= {this.handleChange}
                            value= {newPaletteName}
                            validators = {['required', 'isPaletteNameUnique']}
                            errorMessages = {['Enter the palette name', 'Name already Used!']}
                            
                        />
                       
            
          </DialogContent>
          <DialogActions>
          <Button 
            variant="contained" 
            color="primary" 
            type = "submit">
                Save Palette 
          </Button>
            {/* <Button onClick={this.handleClose}>Subscribe</Button> */}
            <Button onClick={this.handleClose}>Cancel</Button>
          </DialogActions>
          </ValidatorForm>
        </Dialog>
    );
    }
  
  }

export default PaletteMetaForm