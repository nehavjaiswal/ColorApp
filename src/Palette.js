
import React,{ Component } from "react";
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import PaletteFooter from "./PaletteFooter";
import "./Palette.css"

class Palette extends Component{
    constructor(props){
        super(props);
        this.state = {level : 500 , format : "hex"};
        this.changeLevel = this.changeLevel.bind(this);
        this.handleChange = this .handleChange.bind(this);
    }
    changeLevel(level){
        this.setState({level})
    }
    handleChange(val){
        this.setState({ format : val})
    }
    render(){
        const {colors, paletteName, emoji, id} = this.props.palette;
        const{level, format} = this.state
        const colorBoxs = colors[level].map(color =>(
            <ColorBox background ={color[format]}
             name = {color.name} 
             key ={color.id}
            //  id ={color.id}  
            //  paletteId = {id}
             moreUrl = {`/palette/${id}/${color.id}`}
             showLink = {true}
             />
        ))
        return(
            <div className="Palette">
                
               <NavBar level ={level}
                changeLevel ={this.changeLevel} 
                handleChange = {this.handleChange} 
                showingAllColor ={true}
                />
                <div className="Palette-colors">
                    {colorBoxs}
                </div>
                <PaletteFooter paletteName={paletteName} emoji ={emoji} />

            </div>
        )
    }
}

export default Palette;