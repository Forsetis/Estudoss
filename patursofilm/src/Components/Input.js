import React from "react";
import catalog from "../data";
import TvShow from "./TvShow";

class Input extends React.Component {
    constructor () {
        super();
  
        this.state = {
            inputValue: '',
        };
        
        this.handleChange = this.handleChange.bind(this);
    }

    

    handleChange(e) {
        this.setState({ inputValue: e.target.value})
        console.log(this.state.inputValue)
    }
    
    render() {
        const resultados = catalog.filter((item) => item.name.toLowerCase().includes(this.state.inputValue.toLowerCase()));

        return (
            <div>
                <input type="text" 
                onChange={this.handleChange}
                value={this.state.inputValue}
                />
                {resultados.map((item) => (<TvShow key={item.id} tvShowInfo={item} />
        ))}
            </div>
        )
    }
};

export default Input