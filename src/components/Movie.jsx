import React from "react";

class Movie extends React.Component {
    render() {
        return (
            <div className="card" style={{ width: "21rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.movie.Title}</h5>
                    <p className="card-text">{this.props.movie.Plot}</p>
                    <img alt={this.props.movie.Title} src={this.props.movie.Poster} />
                </div>
            </div>
        );
    }
}

export default Movie;
