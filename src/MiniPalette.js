import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const style = {
    main: {
        backgroundColor : "purple",
        border : "3px solid black"
    },
    secondary:{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        "& span": {
            color : "green"
        }  
    }
}

function MiniPalette(props){

    const { classes } = props;
    return(
        <div className={classes.main}>
            <h1>MiniPalette </h1>
            <section className={classes.secondary}>
               <h1>Palette <span>This is red since it is inside the main</span></h1>
               
               <span>This is red since it is inside the main</span>
            </section>

        </div>
        
        
    )
}


export default withStyles(style) (MiniPalette);