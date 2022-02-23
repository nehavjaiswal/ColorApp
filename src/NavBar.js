import React,{ Component } from "react";
import  SliderTooltip  from "rc-slider";
import {Link} from "react-router-dom"
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import 'rc-slider/assets/index.css';
import "./NavBar.css"



class NavBar extends Component{
    constructor(props){
        super(props);
        this.state = {format : "hex" , open : false};
        this.handleFormateChange = this.handleFormateChange.bind(this)
        this.closeSnackbar = this.closeSnackbar.bind(this)
    }
    handleFormateChange(evt){
        this.setState({format : evt.target.value, open:true})
        this.props.handleChange(evt.target.value)
    }
    closeSnackbar(){
        this.setState({ open:false })
    }
    render(){
        const{ level, changeLevel } = this.props;
        const {format} = this.state;
        return(
            <header className="NavBar">
                <div className="logo">
                <Link to="/">
                     reactcolorpacker
                </Link>
                 <a href="#"></a>
                </div>
                <div className="slider-content">
                    <span>Level: {level}</span>
                    <div className="Slider">
                    <SliderTooltip 
                        defaultValue={level}
                        min = {100}
                        max = {900}
                        step = {100}
                        onAfterChange = {changeLevel}
                    />
                </div>
                </div>
                <div className="select-container">
                <Select value={format} onChange = {this.handleFormateChange}>
                    <MenuItem value= "hex">HEX - #fffff</MenuItem>
                    <MenuItem value= "rgb">RGB - (255,255,255)</MenuItem>
                    <MenuItem value= "rgba">RGBA - (255,255,255,0.3)</MenuItem>
                </Select>
                </div>
                <Snackbar 
                    anchorOrigin={{vertical : "bottom" , horizontal : "left"}}
                    autoHideDuration={3000}
                    open ={this.state.open}
                    message = {<span id="message-id">Format Change to {format.toUpperCase()} !!</span>}
                    ContentProps ={{
                        "aria-describedby" : "message-id"
                    }}
                    onClose={this.closeSnackbar}
                    action ={[
                        <IconButton onClick={this.closeSnackbar}
                          color ="inherit"
                          key="close"
                          aria-label="close"  >
                            <CloseIcon />
                        </IconButton>
                    ]}
                />

            </header>
        )
    }
}

export default NavBar