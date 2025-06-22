import React from "react";
import PropTypes from 'prop-types'

class TvShow extends React.Component {
    render () {
            const { tvShowInfo } = this.props
        return (
            <section>
            <h2>{tvShowInfo.name}</h2>
            <img src={tvShowInfo.image} alt={tvShowInfo.name}/>
            <p>Gênero: {tvShowInfo.genre}</p>
            </section>
        )
    }
}

TvShow.propTypes = {
    tvShowInfo: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        genre: PropTypes.string, 
    })
};

export default TvShow