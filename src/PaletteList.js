import React,{Component} from "react"
import MiniPalette from "./MiniPalette"

class PaletteList extends Component{
    render(){
        const {paletteList} = this.props 
        return(
            <div>
            
                <h1>React Colors</h1>
                {paletteList.map(palettle =>(
                    <MiniPalette {... palettle}/>
                
                ))}
            </div>
            
        )
    }
}

export default PaletteList;