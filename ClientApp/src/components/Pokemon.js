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

        const englishDescriptions = speciesDetails.flavor_text_entries.filter(
            (entry) => {
                return entry.language.name === "en";
            }
        );

        const finalDataDictionary = {
            name: pokemonDetails.name,
            id: pokemonDetails.id,
            image: pokemonDetails.sprites.front_default,
            types: pokemonDetails.types.map((type) => {
                return type.type.name;
            }),
            stats: pokemonDetails.stats,
            description:
                englishDescriptions[englishDescriptions.length - 1].flavor_text,
        }

        this.setState({ ...this.state, data: finalDataDictionary })

    }


    componentDidMount() {
        this.fetchData();
    }



    constructor(props) {
        super(props);
        this.state = { isCaught: false, data: null};
        //this.catch = this.catch.bind(this);
    }

    //catch() {
    //    this.setState({
    //        currentCount: this.state.currentCount + 1
    //    });
    //}

    render() {
        return (
            <div className="pokemon-outer" >
                {this.state.data && (
                    <div className="pokemon-container">
                        <div className="pokemon-left">
                        <div className="pokemon-img-container">
                            <img src={this.state.data.image} />
                        </div>
                            <div className="pokemon-name">{this.state.data.name}</div>
                        </div>
                        <div className="pokemon-description">
                            {this.state.data.description}
                        </div>
                     </div>
                )}
            </div>
        );
    }
}
