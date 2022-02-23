import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const style = {
   root : {
        backgroundColor : "white",
        border : "1px solid black",
        position : "relative",
        borderRedius : "5px",
        overflow : "hidden",
        "$:hover" : {
            cursor: "pointer"
        }

   },
   colors :{
        backgroundColor : "grey"
   },
   title :{
        display : "flex",
        justifyContent : "space-between",
        alignItem : "centere",
        color : "black",
        paddingTop : "0.5rem",
        fontSize : "1rem",
        position : "relative"
   },
   emoji:{
        marginLeft : "0.5rem",
        fontSize : "1.5rem"
   }
}

function MiniPalette(props){

    const { classes,paletteName,emoji } = props;
    return(
        <div className={classes.root}>
            <div className={classes.colors}></div>
            <h5 className= {classes.title}>{paletteName} <span className='classes.emoji'>{emoji}</span> </h5>

        </div>
        
        
    )
}


export default withStyles(style) (MiniPalette);