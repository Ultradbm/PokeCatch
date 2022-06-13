import React, { Component } from 'react';
import { Pokemon } from './Pokemon.js';

export class PokeList extends Component {
    static displayName = PokeList.name;

    async fetchPokemon(){
        const pokemonResponse = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        const pokemonJSON = await pokemonResponse.json();
        this.setState({
            pokemonData: pokemonJSON.results
        })
        console.log(pokemonJSON);
    }

    componentDidMount() {
        this.fetchPokemon();
    }

    constructor(props) {
        super(props);
        this.state = { pokemonData: []};
        //this.catch = this.catch.bind(this);
    }

    //catch() {
    //    this.setState({
    //        currentCount: this.state.currentCount + 1
    //    });
    //}

    render() {
        return (
            <div>
                <h1>Browsing all Pokemon</h1>
                {this.state.pokemonData.map((pokemon, index) => {
                    return (
                        <Pokemon key={index + "-" + pokemon.name} name={pokemon.name} url={pokemon.url} />
                        )

                })}
          
            </div>
        );
    }
}
