import Button from "@restart/ui/esm/Button";
import React from "react";
import { Form, FormControl } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Movie from "./Movie";

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            query: "",
            movie: {}
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ query: event.target.value });
        console.log(this.state.query);
    }

    handleSearch(event) {
        event.preventDefault();
        console.log(this.state.query);
        fetch("https://www.omdbapi.com/?apikey=e4db3ced&t=" + this.state.query)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    movie: data
                });
                console.log(this.state.movie);
                if (this.state.movie.Response === "False") {
                    this.setState({
                        error: "Movie not Found"
                    });
                }
            });
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSearch}>
                    <InputGroup className="mb-3">
                        <FormControl
                            onChange={this.handleChange}
                            placeholder="Movie Title"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button type="submit" variant="outline-secondary" id="button-addon2">
                            Search
                        </Button>
                    </InputGroup>
                </Form>
                <Movie movie={this.state.movie} />
            </div>
        );
    }
}

export default Search;
