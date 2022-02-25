import React from "react";
import { withStyles } from '@material-ui/core/styles';
import styles from "./Styles/PaletteFooterStyle";



function PaletteFooter(props){
    const {paletteName , emoji} = props;
    return(
    <footer className="palette-footer">
        {paletteName}
        <span className="emoji">
            {emoji}
        </span>
    </footer>
    )
}


export default withStyles(styles) (PaletteFooter);