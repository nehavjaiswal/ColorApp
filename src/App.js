import Palette from './Palette';
import seedColor from './seedColor';
import { Route, Switch } from 'react-router-dom';

import { generatePalette } from './ColorHelper';

function App() {
    
  return (
    <Switch>
      <Route exact path="/" render ={() => <h1>palette</h1>} />
      <Route exact path="/palette/:id" render ={() => <h1>Indivalival Palttle</h1>} />
    </Switch>
   
    // <div>
    //     <Palette palette = {generatePalette(seedColor[4])} />
    // </div>
  );
}

export default App;
