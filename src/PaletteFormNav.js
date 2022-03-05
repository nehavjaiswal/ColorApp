import React, {Component} from "react";
import clsx from 'clsx';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import Button from '@material-ui/core/Button';
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
        this.setState({[evt.target.name] : evt.target.value})
      }
      showForm(){
          this.setState({ formShowing : true })
      }
      hideForm(){
        this.setState({ formShowing : false })

      }
    render(){
        const {classes, open, palettes, handleSubmit} = this.props;
        // const {newPaletteName} = this.state;
        return(
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    color= "default"
                    position="fixed"
                    className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={this.props.handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton,{
                        [classes.hide]: open,
                         })}
                    >
                        <AddToPhotosIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                       Create A Palette
                    </Typography>
                    </Toolbar>
                    <div className={classes.newBtns}>
                    <Link to="/"> 
                        <Button  variant="contained" color="secondary" className={classes.btn}> Go Back </Button>
                    </Link>
                    <Button variant="contained" color="primary" onClick={this.showForm}  className={classes.btn}>
                        Save
                     </Button>
                    </div>
                </AppBar>
               { this.state.formShowing && ( <PaletteMetaForm  palettes ={palettes} handleSubmit ={handleSubmit} hideForm ={this.hideForm} /> )} 
            </div>
        )
    }
}



export default withStyles(styles, {withThem : true}) (PaletteFormNav);