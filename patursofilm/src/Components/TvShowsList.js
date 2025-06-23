import React from "react";
import catalog from "../data";
import TvShow from "./TvShow";

class TvShowsList extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        };
    }
    
    render() {
        return (
            <section>
            {
                // catalog.map(tvShow => (<TvShow key={TvShow.id} tvShowInfo={tvShow}/>))
            }
            </section>
        )
    }
}

export default TvShowsList;