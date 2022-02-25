import React,{Component} from "react"
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import PaletteFooter from "./PaletteFooter";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import "./ColorBox.css"

const styles = {
    Palette :{
        height: "100vh",
        display: "flex",
        flexDirection: "column"
    },
    colors :{
        height : "90%"
    },
    goBack : {
        height :  "50%",
        width: "20%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4.5px",
        opacity: "1",
        backgroundColor: "black",
        "& a" : {
        color:  "white",
        width: "100px",
        height:"30px",
        position: "absolute",
        display: "inline-block",
        top: "50%",
        left: "50%",
        marginTop: "-15px",
        marginLeft: "-50px",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        textAlign: "center",
        fontSize: "1rem",
        lineHeight: "30px",
        outline: "none",
        border: "none",
        textTransform: "uppercase",
        textDecoration: "none"
        }
    }
}

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
