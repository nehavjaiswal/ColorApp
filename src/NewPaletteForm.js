import React,{Component} from "react";
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import DraggableColorList from "./DraggableColorList";
import { arrayMove } from "react-sortable-hoc";


const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    height : "calc(100vh - 64px)",
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});



class NewPaletteForm extends Component{
  static defaultProps={
    maxColors : 20
  }
  constructor(props){
    super(props);
    this.state ={
      open : true,
      newColorName : "",
      colors : this.props.palettes[0].colors
    };
    this.addNewColor = this.addNewColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeColor = this.removeColor.bind(this);
    this.clearColor = this.clearColor.bind(this);
    this.addRandomColor = this.addRandomColor.bind(this);

  }

     handleDrawerOpen = () => {
        this.setState ({ open : true });
      };

     handleDrawerClose = () => {
        this.setState ({ open : false });
        
      }

     
      addNewColor(newColor){
        this.setState({colors: [...this.state.colors, newColor],  newColorName: ""})
      }

      handleChange(evt){
        this.setState({[evt.target.name] : evt.target.value})
      }

      clearColor(){
        this.setState({colors : []})
      }

      addRandomColor(){
        const allColor = this.props.palettes.map(p => p.colors).flat();
        const rand = Math.floor(Math.random()* allColor.length)
        const randomColor = allColor[rand];
        this.setState({colors : [...this.state.colors,randomColor]})
        
      }
      handleSubmit(newPaletteName){
        const newPalette = {
          paletteName : newPaletteName,
          id : newPaletteName.toLocaleLowerCase().replace(/ /g , "-"),
          colors : this.state.colors
        }
          this.props.savePalette(newPalette);
          this.props.history.push("/")
      }

      removeColor(colorName){
        this.setState({
         colors :  this.state.colors.filter(color => color.name !== colorName)
        })
      }
      
      onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({colors}) => ({
          colors: arrayMove(colors, oldIndex, newIndex),
        }));
      };
    render(){
        
    const {classes, maxColors,palettes} = this.props;
    const {open, colors} = this.state;
    const paletteIsFull =colors.length >= maxColors;
  
        return(
        <div className={classes.root}>
             <PaletteFormNav classes = {classes}
               open={open}
               palettes ={palettes}
               handleChange={this.handleChange}
               handleDrawerOpen={this.handleDrawerOpen}
               handleSubmit={this.handleSubmit}
             />
     
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <Typography variant ="h4">Deasign Your Palette</Typography> 

            <div>
              <Button 
                  variant="contained" 
                  color="secondary"
                  onClick={this.clearColor}> 
                    clear color
                </Button>
              <Button 
                  variant="contained" 
                  color="primary"
                  disabled ={paletteIsFull} 
                  onClick = {this.addRandomColor}> 
                    random color 
              </Button>
            </div>
           
            <ColorPickerForm 
                paletteIsFull={paletteIsFull}
                addNewColor={this.addNewColor} 
                colors ={colors}
            />
          </Drawer>
            <main
              className={clsx(classes.content, {
                [classes.contentShift]: open,
              })}
            >
              <div className={classes.drawerHeader} />
            
                <DraggableColorList
                  colors = {this.state.colors} 
                  removeColor = {this.removeColor} 
                  axis ="xy"
                  onSortEnd = {this.onSortEnd}
                />
                
            </main>
    </div>
        )
    }
}

export default withStyles(styles, {withThem : true}) (NewPaletteForm);