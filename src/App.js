import React,{Component} from 'react';
import Palette from './Palette';
import seedColor from './seedColor';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import { Route, Switch } from 'react-router-dom';
import { generatePalette } from './ColorHelper';



class App extends Component{
  constructor(props){
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = {palettes : savedPalettes || seedColor};
    this.savePalette =this.savePalette.bind(this);
    this.findPalette =this.findPalette.bind(this);

  }
  findPalette(id){
    return this.state.palettes.find(function(palette) {
      return palette.id === id;
    });
  }
  savePalette(newPalette){
    this.setState({palettes: [...this.state.palettes, newPalette]},
      this.syncLocalStorage
       );
  }
  syncLocalStorage(){
      window.localStorage.setItem(
        "palettes",
        JSON.stringify(this.state.palettes)
      );
  }
  render(){
    return(
         <Switch>
              
              <Route exact path = "/palette/new" 
               render={(routeProps) => <NewPaletteForm savePalette = {this.savePalette} palettes ={this.state.palettes} {...routeProps} /> }/>              

              <Route exact path="/palette/:paletteId/:colorId" 
                render ={(routeProps) => <SingleColorPalette colorId = {routeProps.match.params.colorId} palette = {generatePalette(this.findPalette(routeProps.match.params.paletteId) )}
               />}  />

              <Route exact path="/" render ={(routeProps) => <PaletteList paletteList ={this.state.palettes}  {...routeProps} /> } />

              <Route exact path="/palette/:id" render ={(routeProps) => 
                  <Palette palette = {generatePalette(this.findPalette(routeProps.match.params.id) )}
               />}/>

                
             
           </Switch>
         
      //     // <div>
      //     //     <Palette palette = {generatePalette(seedColor[4])} />
      //     // </div>
    )
  }
}


export default App;
