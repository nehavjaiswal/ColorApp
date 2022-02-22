import './App.css';

import Palette from './Palette';
import seedColor from './seedColor';
import { generatePalette } from './ColorHelper';

function App() {
    console.log(generatePalette(seedColor[4]))
  return (
   
    <div>
        <Palette palette = {generatePalette(seedColor[4])} />
    </div>
  );
}

export default App;
