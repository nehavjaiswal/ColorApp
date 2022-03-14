import React, {Component} from "react";
import classNames from 'classnames';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import {CssBaseline, AppBar, Toolbar, Typography, IconButton, Button }from '@material-ui/core';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import PaletteMetaForm from "./PaletteMetaForm";
import styles from "./Styles/PaletteFormNavStyle";

class PaletteFormNav extends Component{
    constructor(props){
        super(props);
        this.state ={
            newPaletteName: "",
            formShowing : false
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.showForm = this.showForm.bind(this)
        this.hideForm = this.hideForm.bind(this)
        
    }
    
    handleChange(evt){
        this.setState({
            [evt.target.name] : evt.target.value
        });
      }
      showForm(){
          this.setState({ formShowing : true })
      }
      hideForm(){
        this.setState({ formShowing : false })

      }
    render(){
        const {classes, open, palettes, handleSubmit,handleDrawerOpen} = this.props;
        const {formShowing} = this.state;
        return(
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    color= "default"
                    position="fixed"
                    className={classNames(classes.appBar, {
                    [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar disableGutters={!open}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={classNames(classes.menuButton,{
                        [classes.hide]: open
                         })}
                    >
                        <AddToPhotosIcon/>
                    </IconButton>
                    <Typography variant="h6" color = "inherit" noWrap>
                       Create A Palette
                    </Typography>
                    </Toolbar>
                    <div className={classes.navBtns}>
                    <Link to="/" > 
                        <Button 
                         variant="contained" 
                         color="secondary" 
                         className={classes.btn} >
                          Go Back 
                          </Button>
                    </Link>
                    <Button 
                         variant="contained"
                         color="primary" 
                         onClick={this.showForm} 
                         className={classes.btn} >
                        Save
                     </Button>
                    </div>
                </AppBar>
               { formShowing && (
                    <PaletteMetaForm 
                        palettes ={palettes}
                        handleSubmit ={handleSubmit} 
                        hideForm ={this.hideForm} 
                    /> 
                    )} 
            </div>
        )
    }
}



export default withStyles(styles, {withTheme : true}) (PaletteFormNav);