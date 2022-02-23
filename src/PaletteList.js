import React,{Component} from "react"
import {Link} from "react-router-dom"
class PaletteList extends Component{
    render(){
        const {paletteList} = this.props 
        return(
            <div>
                <h1>React Colors</h1>
                {paletteList.map(palettle =>(
                    <p>
                    <Link to={`/palette/${palettle.id}`}>
                    {palettle.paletteName}
                    </Link>
                    </p>
                    
    
                ))}
            </div>
            
        )
    }
}

export default PaletteList;