
import React,{ Component } from "react";
import ColorBox from "./ColorBox";
import  SliderTooltip  from "rc-slider";
import 'rc-slider/assets/index.css';
import "./Palette.css"

class Palette extends Component{
    constructor(props){
        super(props);
        this.state = {level : 500};
        this.changeLevel = this.changeLevel.bind(this)
    }
    changeLevel(level){
        this.setState({level})
    }
    render(){
        const {colors} = this.props.palette;
        const{level} = this.state
        const colorBoxs = colors[level].map(color =>(
            <ColorBox background ={color.hex} name = {color.name}  />
        ))
        return(
            <div className="Palette">
                <div className="Slider">
                    <SliderTooltip 
                        defaultValue={level}
                        min = {100}
                        max = {900}
                        step = {100}
                        onAfterChange = {this.changeLevel}
                    />
                </div>
               
                <div className="Palette-colors">
                    {colorBoxs}
                </div>
            </div>
        )
    }
}

export default Palette;