import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';


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

  //player id counter
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => { //delta is the variation of a function
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
  }

  handleAddPlayer = (name) => {
    this.setState({
      players: [
        ...this.state.players,
        {
          name,
          score: 0,
          id: this.prevPlayerId += 1
        }
      ]
    });
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
          players={this.state.players} 
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

        <AddPlayerForm  addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;
