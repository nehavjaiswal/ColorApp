import  React,{Component} from 'react';
import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';
import emoji from 'emoji-mart/dist-es/components/emoji/emoji';

 class PaletteMetaForm extends Component {
   constructor(props){
     super(props);
     this.state = {
      stage : "form",
      newPaletteName: ""
     } 
     this.handleChange = this.handleChange.bind(this)
     this.showEmojiPicker = this.showEmojiPicker.bind(this)
     this.savePalette = this.savePalette.bind(this)

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
  showEmojiPicker(){
    this.setState({stage : "emoji"})
  }
  savePalette(emoji){
    const newPalette = {
      paletteName : this.state.newPaletteName,
      emoji : emoji.native
    };
    this.props.handleSubmit(newPalette)
  }

  render() {
    const {open,newPaletteName} = this.state;
    const { hideForm,handleSubmit } = this.props
    return (
      <div>
      <Dialog open ={this.state.stage === "emoji"} onClose={hideForm}>
      <DialogTitle>Choose a Palette Emoji</DialogTitle>

      <Picker title='Pick your emoji' onSelect={this.savePalette} />
      </Dialog>
        <Dialog open={this.state.stage === "form"} onClose={hideForm}>
          <DialogTitle>Choose a Palette Name</DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
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
 
            <Button onClick={this.props.hideForm}>Cancel</Button>
          </DialogActions>
          </ValidatorForm>
        </Dialog>
        </div>
    );
    }
  
  }

export default PaletteMetaForm