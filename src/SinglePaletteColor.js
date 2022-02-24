import React,{Component} from "react"
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import PaletteFooter from "./PaletteFooter";
import "./ColorBox.css"


class SinglePaletteColor extends Component{
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
        const {paletteName , emoji} = this.props.palette;
        const colorBox = this._shades.map(color => (
            <ColorBox 
            key ={color.id}
            name = {color.name}
            background = {color[format]}
            showLink = {false}
             />
        ))
        return(
            <div className="Palette" >
                 <NavBar 
                    handleChange = {this.handleChange} 
                        showingAllColor = {false}
                    />
                <div className="Palette-colors">
                    {colorBox}
                </div>
                <PaletteFooter paletteName={paletteName} emoji ={emoji} />
            </div>
        )
    }
}


export default SinglePaletteColor;
