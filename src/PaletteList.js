import React,{Component} from "react";
import {Link} from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from '@material-ui/core/styles';
import styles from "./Styles/PaletteListStyle";
import { CSSTransition, TransitionGroup} from 'react-transition-group';


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
                     <TransitionGroup className={classes.palettes}>
                        {paletteList.map(palette =>(
                            <CSSTransition key ={palette.id} className ="fade" timeout = {2000}>
                            <MiniPalette {... palette} handleClick = {()=> this.gotoPalette(palette.id)}
                                handleDelete = {deletePalette}
                                key = {palette.id}
                                id = {palette.id}
                            /> 
                            </CSSTransition>
                        
                        ))}
                        </TransitionGroup>
                </div>
               
            </div>
            
        )
    }
}

export default withStyles(styles) (PaletteList);