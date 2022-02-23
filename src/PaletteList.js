import React,{Component} from "react"
import MiniPalette from "./MiniPalette"
import { withStyles } from '@material-ui/core/styles';

const style = {
    root:{
        
        backgroundColor : "blue",
        height : "100%",
        display : "flex",
        alignItems : "flex-start",
        justifyContent : "center"
    },
    container:{
        width : "50%",
        display : "flex",
        alignItems : "flex-start",
        flexDirection : "coloumn",
        flexWrap : "wrap"
    },
    nav:{
        color : "white",
        display : "flex",
        width : "100%",
        justifyContent : "space-between"
    },
    palettes:{
        boxSizing : "border-box",
        width : "100%",
        display : "grid",
        gridTemplateColumns : "repeat(3, 30%)",
        gridGap : "5%"
    }
}
class PaletteList extends Component{
    render(){
        const {paletteList ,classes} = this.props 
        return(
            <div className= {classes.root}>
                <div className= {classes.container}>
                    <nav className= {classes.nav}>
                         <h1>React Colors</h1>
                    </nav>
                     <div className={classes.palettes}>
                        {paletteList.map(palettle =>(
                        <MiniPalette {... palettle}/>
                        ))}
                     </div>
                </div>

               
                
                
               
            </div>
            
        )
    }
}

export default withStyles(style) (PaletteList);