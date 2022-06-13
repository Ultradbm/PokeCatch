import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
            <h1 className="text-center"> Hey There, <br/> Welcome to PokeCatch!</h1>
            <h3 className="text-center">Start by heading to the Pokemon tab and catching some!</h3>
      </div>
    );
  }
}
