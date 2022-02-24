import React,{Component} from "react"
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import PaletteFooter from "./PaletteFooter";
import { Link } from "react-router-dom";
import "./ColorBox.css"


class SingleColorPalette extends Component{
    constructor(props){
        super(props);
        this._shades = this.gatherShades(this.props.palette , this.props.colorId)
        this.state = { format : "hex"};
        this.handleChange = this.handleChange.bind(this);
    }

    gatherShades(palette , colorToFilterBy){
      let shades =[]
      let allColor = palette.colors;
      for(let key in allColor){
          shades = shades.concat(
              allColor[key].filter(color => color.id === colorToFilterBy)
          )
      }
      return shades.slice(1);
    }

    handleChange(val){
        this.setState({ format : val})
    }

    render(){
        const {format} = this.state;
        const {paletteName, emoji, id} = this.props.palette;
        const colorBox = this._shades.map(color => (
            <ColorBox 
            key ={color.name}
            name = {color.name}
            background = {color[format]}
            showLink = {false}
             />
        ))
        return(
            <div className="SingleColorPalette Palette" >
                 <NavBar 
                    handleChange = {this.handleChange} 
                        showingAllColor = {false}
                    />
                <div className=" Palette-colors">
                    {colorBox}
                <div className="go-back colorBox">
                <Link to={`/palette/${id}`} className= "back-button">Go Back</Link>
                </div>

                </div>
                <PaletteFooter paletteName={paletteName} emoji ={emoji} />
            </div>
        )
    }
}


export default SingleColorPalette;
