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
        height: "64px"
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
      newBtns:{

      }
})

class PaletteFormNav extends Component{
    constructor(props){
        super(props);
        this.state ={newPaletteName: ""}
        
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(evt){
        this.setState({[evt.target.name] : evt.target.value})
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
                        Persistent drawer
                    </Typography>
                    </Toolbar>
                    <div className={classes.newBtns}>
                   
                    <PaletteMetaForm  
                        palettes ={palettes}
                        handleSubmit ={handleSubmit}

                    />
                    <Link to="/"> 
                        <Button variant="contained" color="secondary" >Go Back</Button>
                    </Link>
                    </div>
                </AppBar>
            </div>
        )
    }
}



export default withStyles(styles, {withThem : true}) (PaletteFormNav);