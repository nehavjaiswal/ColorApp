import React from "react";
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import { SortableElement } from "react-sortable-hoc";
import styles from "./Styles/DraggableColorBoxStyle";

const DraggableColorBox = SortableElement(props => {
    const { classes, color, name, handleClick } = props;
    return(
        <div className={classes.root} 
        style={{background : color}}>
        <div className= {classes.BoxContent}>
            <span> {name}</span>
             <DeleteIcon className= {classes.deleteIcon} onClick= {handleClick} />
        </div>
           
        </div>
    );
});


export default withStyles(styles) (DraggableColorBox);