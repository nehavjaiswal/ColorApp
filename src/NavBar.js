import React,{ Component } from "react";
import  SliderTooltip  from "rc-slider";
import 'rc-slider/assets/index.css';
import "./NavBar.css"


class NavBar extends Component{
    render(){
        const{ level, changeLevel } = this.props
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
                
            </header>
        )
    }
}

export default NavBar