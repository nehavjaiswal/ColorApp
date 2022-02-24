import React,{Component} from 'react';
import Palette from './Palette';
import seedColor from './seedColor';
import PaletteList from './PaletteList';
import { Route, Switch } from 'react-router-dom';
import { generatePalette } from './ColorHelper';



class App extends Component{
  findPalette(id){
    return seedColor.find(function(palette) {
      return palette.id === id;
    });
  }
  render(){
    return(
         <Switch>
              <Route exact path="/" render ={(routeProps) => <PaletteList paletteList ={seedColor}  {...routeProps} /> } />
              <Route exact path="/palette/:id" render ={(routeProps) => <Palette palette = {generatePalette(this.findPalette(routeProps.match.params.id) )} />} />
              <Route exact path="/palette/:paletteId/:colorId" render = {() => <h1>SINGLR PALETTE</h1>} />
           </Switch>
         
      //     // <div>
      //     //     <Palette palette = {generatePalette(seedColor[4])} />
      //     // </div>
    )
  }
}


export default App;
