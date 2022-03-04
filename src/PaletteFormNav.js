import React, {Component} from "react";
import clsx from 'clsx';
import { Link } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';



class PaletteFormNav extends Component{
    constructor(props){
        super(props);
        this.state ={newPaletteName: ""}
        
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount(){
        ValidatorForm.addValidationRule('isPaletteNameUnique', value => 
        this.props.palettes.every(
        ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase()
        )
     );
    }
    handleChange(evt){
        this.setState({[evt.target.name] : evt.target.value})
      }
    render(){
        const {classes, open} = this.props;
        const {newPaletteName} = this.state;
        return(
            <div>
                <CssBaseline />
                <AppBar
                    color= "default"
                    position="fixed"
                    className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={this.props.handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Persistent drawer
                    </Typography>
                    <ValidatorForm onSubmit={() => this.props.handleSubmit(newPaletteName)}>
                        <TextValidator
                            label= "Palette Name"
                            name= "newPaletteName"
                            onChange= {this.handleChange}
                            value= {newPaletteName}
                            validators = {['required', 'isPaletteNameUnique']}
                            errorMessages = {['Enter the palette name', 'Name already Used!']}
                            
                        />
                        <Button variant="contained" 
                        color="primary" 
                        type = "submit">
                        Save Palette 
                        </Button>
                        <Link to="/"> 
                            <Button variant="contained" color="secondary" >Go Back</Button>
                        </Link>
                    </ValidatorForm>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}



export default PaletteFormNav;