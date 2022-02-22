import React,{ Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css"

class Palette extends Component{
    
    render(){
        const colorBoxs = this.props.colors.map(color =>(
            <ColorBox background ={color.color} name = {color.name}  />
        ))
        return(
            <div className="Palette">
                <div className="Palette-colors">
                    {colorBoxs}
                </div>
            </div>
        )
    }
}

export default Palette;