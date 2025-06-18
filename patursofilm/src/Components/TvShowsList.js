import React from "react";
import catalog from "../data";
import TvShow from "./TvShow";

class TvShowsList extends React.Component {
    render() {
        return (
            <section>
            {
                catalog.map(tvShow => (<TvShow key={TvShow.id} tvShow={tvShow}/>))
            }
            </section>
        )
    }
}

export default TvShowsList;