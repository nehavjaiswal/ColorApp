import React from "react";
import { withStyles } from '@material-ui/core/styles';

const styles ={
    root : {
        height : "25%",
        width: "20%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4.5px",
    }
}

function DraggableColorBox(props) {
    return(
        <div className={props.classes.root} 
        style={{background : props.color}}>
            {props.color}
        </div>
    )
}


export default withStyles(styles) (DraggableColorBox);