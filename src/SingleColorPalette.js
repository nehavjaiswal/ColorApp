import React,{Component} from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import PaletteFooter from "./PaletteFooter";
import styles from "./Styles/SingleColorPaletteStyle";


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
        const {classes} = this.props;
        const colorBox = this._shades.map(color => (
            <ColorBox 
            key ={color.name}
            name = {color.name}
            background = {color[format]}
            showingFullPalette = {false}
             />
        ))
        return(
            <div className={classes.Palette} >
                 <NavBar 
                    handleChange = {this.handleChange} 
                        showingAllColor = {false}
                    />
                <div className={classes.colors}>
                    {colorBox}
                <div className={classes.goBack}>
                <Link to={`/palette/${id}`} >Go Back</Link>
                </div>

                </div>
                <PaletteFooter paletteName={paletteName} emoji ={emoji} />
            </div>
        )
    }
}


export default  withStyles(styles) (SingleColorPalette);
