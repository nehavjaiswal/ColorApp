import React,{ Component } from "react";
import  SliderTooltip  from "rc-slider";
import 'rc-slider/assets/index.css';
import "./NavBar.css"
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class NavBar extends Component{
    constructor(props){
        super(props);
        this.state = {format : "hex"};
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(evt){
        this.setState({format : evt.target.value})
        this.props.handleChange(evt.target.value)
    }
    render(){
        const{ level, changeLevel } = this.props;
        const {format} = this.state;
        return(
            <header className="NavBar">
                <div className="logo">
                 <a href="#">reactcolorpacker</a>
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
                <Select value={format} onChange = {this.handleChange}>
                    <MenuItem value= "hex">HEX - #fffff</MenuItem>
                    <MenuItem value= "rgb">RGB - (255,255,255)</MenuItem>
                    <MenuItem value= "rgba">RGBA - (255,255,255,0.3)</MenuItem>
                </Select>
                </div>
                

            </header>
        )
    }
}

export default NavBar