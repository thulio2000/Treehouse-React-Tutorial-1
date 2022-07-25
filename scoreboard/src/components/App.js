import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';

class App extends Component {
  state = {
    players: [
      {
        name: "Luke",
        score: 0,
        id: 1
      },
      {
        name: "Alfredo",
        score: 0,
        id: 2
      },
      {
        name: "Bilbo",
        score: 0,
        id: 3
      },
      {
        name: "Gohan",
        score: 0,
        id: 4
      }
    ]
  };

  handleScoreChange = (index, delta) => { //delta is the variation of a function
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          totalPlayers={this.state.players.length} 
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            changeScore={this.handleScoreChange}
            key={player.id.toString()} 
            index={index}
            removePlayer={this.handleRemovePlayer}           
          />
        )}
      </div>
    );
  }
}

export default App;
