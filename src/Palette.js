import React,{ Component } from "react";
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import PaletteFooter from "./PaletteFooter";
import { withStyles } from "@material-ui/styles";
import styles from "./Styles/PaletteStyle";




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
        const {classes} = this.props;
        const{level, format} = this.state
        const colorBoxs = colors[level].map(color =>(
            <ColorBox background ={color[format]}
             name = {color.name} 
             key ={color.id}
            //  id ={color.id}  
            //  paletteId = {id}
             moreUrl = {`/palette/${id}/${color.id}`}
             showingFullPalette = {true}
             />
        ))
        return(
            <div className= {classes.Palette}>
                
               <NavBar level ={level}
                changeLevel ={this.changeLevel} 
                handleChange = {this.handleChange} 
                showingAllColor ={true}
                />
                <div className={classes.colors}>
                    {colorBoxs}
                </div>
                <PaletteFooter paletteName={paletteName} emoji ={emoji} />

            </div>
        )
    }
}

export default withStyles(styles) (Palette);