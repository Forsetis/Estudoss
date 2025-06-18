import React from "react";

class TvShow extends React.Component {
    render () {
            const { tvShow } = this.props
        return (
            <section>
            <h2>{tvShow.name}</h2>
            <img src={tvShow.image} alt={tvShow.name}/>
            <p>Gênero: {tvShow.genre}</p>
            </section>
        )
    }
}

export default TvShow