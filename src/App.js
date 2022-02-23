import React,{Component} from 'react';

import Palette from './Palette';
import seedColor from './seedColor';
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
              <Route exact path="/" render ={() => <h1>palette</h1>} />
              <Route exact path="/palette/:id" render ={(routeProps) => <Palette palette = {generatePalette(this.findPalette(routeProps.match.params.id) )} />} />
           </Switch>
         
      //     // <div>
      //     //     <Palette palette = {generatePalette(seedColor[4])} />
      //     // </div>
    )
  }
}


export default App;
