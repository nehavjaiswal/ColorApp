import React,{Component} from "react";
import {Link} from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from '@material-ui/core/styles';
import styles from "./Styles/PaletteListStyle";



class PaletteList extends Component{
    gotoPalette(id){
        this.props.history.push(`/palette/${id}`)
    }
    render(){
        const {paletteList, classes, deletePalette} = this.props 
        return(
            <div className= {classes.root} key ={paletteList.id}>
                <div className= {classes.container}>
                    <nav className= {classes.nav}>
                         <h1 className={classes.heading}>React Colors</h1>
                         <Link to="/palette/new">Create Palette</Link>
                    </nav>
                     <div className={classes.palettes}>
                        {paletteList.map(palette =>(
                            <MiniPalette {... palette} handleClick = {()=> this.gotoPalette(palette.id)}
                                handleDelete = {deletePalette}
                                key = {palette.id}
                                id = {palette.id}
                            /> 
                        
                        ))}
                     </div>
                </div>

               
                
                
               
            </div>
            
        )
    }
}

export default withStyles(styles) (PaletteList);