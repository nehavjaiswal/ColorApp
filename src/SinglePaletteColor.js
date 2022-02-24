import React,{Component} from "react"
import ColorBox from "./ColorBox";
import "./ColorBox.css"


class SinglePaletteColor extends Component{
    constructor(props){
        super(props);
        this._shades = this.gatherShades(this.props.palette , this.props.colorId)
        console.log(this._shades)
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
    render(){
        const colorBox = this._shades.map(color => (
            <ColorBox 
            key ={color.id}
            name = {color.name}
            background = {color.hex}
            showLink = {false}
             />
        ))
        return(
            <div className="Palette" >
                <h1>Single Palette Color</h1>
                <div className="Palette-colors">
                    {colorBox}
                </div>
            </div>
        )
    }
}


export default SinglePaletteColor;
