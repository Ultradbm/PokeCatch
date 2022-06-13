import React, { Component } from 'react';

export class Pokemon extends Component {
    static displayName = Pokemon.name;

    async fetchData() {
        const pokemonDetailsResponse = await fetch(this.props.url);
        const pokemonDetails = await pokemonDetailsResponse.json();
        const speciesDetailsResponse = await fetch(pokemonDetails.species.url);
        const speciesDetails = await speciesDetailsResponse.json();
        console.log(pokemonDetails);
        console.log(speciesDetails);

    }

    componentDidMount() {
        this.fetchData();
    }


    constructor(props) {
        super(props);
        this.state = { isCaught: false};
        //this.catch = this.catch.bind(this);
    }

    //catch() {
    //    this.setState({
    //        currentCount: this.state.currentCount + 1
    //    });
    //}

    render() {
        return (
            <div className="pokemon-container" >
                <div className="img-fluid"></div>
                {this.props.name}
            </div>
        );
    }
}
