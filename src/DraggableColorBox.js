import React from "react";
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@mui/icons-material/Delete';

const styles ={
    root : {
        height : "25%",
        width: "20%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4.5px",
        "&:hover svg" : {
            color : "white",
            transform : "scale(1.5)"
        },
    },
    BoxContent : {
        width: "100%",
        position: "absolute",
        bottom: "0px",
        left: "0px",
        padding: "10px",
        fontSize:"12px",
        textTransform: "uppercase",
        color: "rgba(0, 0, 0, 0.3)",
        letterSpacing: "1px",
        display : "flex",
        justifyContent : "space-between",
        transition : "all ease-in-out"
    }
}

function DraggableColorBox(props) {
    const { classes } = props;
    return(
        <div className={classes.root} 
        style={{background : props.color}}>
        <div className= {classes.BoxContent}>
            <span> {props.name}</span>
             <DeleteIcon classname= {classes.deleteIcon} />
        </div>
           
        </div>
    )
}


export default withStyles(styles) (DraggableColorBox);