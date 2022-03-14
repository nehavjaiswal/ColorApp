import React,{Component} from "react";
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import {Drawer, Typography, Divider, IconButton, Button } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
import DraggableColorList from "./DraggableColorList";
import seedColor from "./seedColor";
import styles from "./Styles/NewPaletteFormStyle";
import { arrayMove } from "react-sortable-hoc";



class NewPaletteForm extends Component{
  static defaultProps = {
    maxColors : 20
  }
  constructor(props){
    super(props);
    this.state ={
      open : true,
      currentColor : "#000000",
      colors : seedColor[0].colors
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
        let rand;
        let randomColor;
        let isDuplicateColor = true;
        while (isDuplicateColor){
          rand = Math.floor(Math.random()* allColor.length);
          randomColor = allColor[rand];
          isDuplicateColor = this.state.colors.some(
            color => color.name === randomColor.name);
        }
        this.setState({colors : [...this.state.colors,randomColor]})
        // console.log(randomColor)
      }
      handleSubmit(newPalette){
        newPalette.id =  newPalette.paletteName.toLowerCase().replace(/ /g , "-");
        newPalette.colors = this.state.colors;
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
    const paletteIsFull = colors.length >= maxColors;
  
        return(
        <div className={classes.root}>
             <PaletteFormNav 
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
            <div className={classes.container}>
            <Typography variant ="h4" gutterBottom>Deasign Your Palette</Typography> 

            <div className={classes.buttons}>
              <Button 
                  variant="contained" 
                  color="secondary"
                  className={classes.button}
                  onClick={this.clearColor}> 
                    clear color
                </Button>
              <Button 
                  variant="contained" 
                  color="primary"
                  className={classes.button}
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
            </div>
          </Drawer>
            <main
              className={clsx(classes.content, {
                [classes.contentShift]: open,
              })}
            >
              <div className={classes.drawerHeader} />
            
                <DraggableColorList
                  colors = {colors} 
                  removeColor = {this.removeColor} 
                  axis ="xy"
                  onSortEnd = {this.onSortEnd}
                  distance ={20}
                />
                
            </main>
    </div>
        )
    }
}

export default withStyles(styles, {withThem : true}) (NewPaletteForm);