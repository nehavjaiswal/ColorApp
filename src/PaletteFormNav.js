import React, {Component} from "react";
import clsx from 'clsx';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import PaletteMetaForm from "./PaletteMetaForm";


const drawerWidth = 400;

const styles = theme => ({
    root : {
        display : "flex"
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
        height: "64px",
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      newBtns: {
        marginRight :"1rem",
        "& a": {
            textDecoration : "none",
        }
        
      },
      btn: {
        margin : "0 0.5rem",
      },
})

class PaletteFormNav extends Component{
    constructor(props){
        super(props);
        this.state ={
            newPaletteName: "",
            formShowing : false
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.showForm = this.showForm.bind(this)
        
    }
    
    handleChange(evt){
        this.setState({[evt.target.name] : evt.target.value})
      }
      showForm(){
          this.setState({ formShowing : true })
      }
    render(){
        const {classes, open, palettes, handleSubmit} = this.props;
        const {newPaletteName} = this.state;
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
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                       Create A Palette
                    </Typography>
                    </Toolbar>
                    <div className={classes.newBtns}>
                    <Link to="/"> 
                        <Button  variant="contained" color="secondary" className={classes.btn}> Go Back </Button>
                    </Link>
                    <Button variant="contained" color="primary" onClick={this.showForm} className={classes.btn}>
                        Save
                     </Button>
                    </div>
                </AppBar>
               { this.state.formShowing && ( <PaletteMetaForm  palettes ={palettes} handleSubmit ={handleSubmit} /> )} 
            </div>
        )
    }
}



export default withStyles(styles, {withThem : true}) (PaletteFormNav);