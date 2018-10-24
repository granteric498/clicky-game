import React, {Component} from 'react';
import "./App.css";
import players from "./players.json";
import Card from "./components/Card";
// import Footer from ".components/Footer"
import Nav from "./components/Nav";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";


class App extends Component {
    state = {
        message: "Click an image to begin!",
        topScore: 0,
        curScore: 0,
        players: players,
        unselectedPlayers: players
    }

    randomizeArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selectPlayer = name => {
      const findPlayer = this.state.unselectedPlayers.find(item => item.name === name);

      if(findPlayer === undefined) {
        this.setState({
        message: "You guessed incorrectly!",
        topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
        curScore: 0,
        players: players,
        unselectedPlayers: players
      });
    } else {
      const newPlayer = this.state.unselectedPlayers.filter(item => item.name !== name);

      this.setState({
          message: "You guessed correctly!",
          curScore: this.state.curScore + 1,
          players: players,
          unselectedPlayers: newPlayer
      });
    }

    this.randomizeArray(players);
  };

  render() {
      return (
        <Wrapper>
          <Nav
              message={this.state.message}
              curScore={this.state.curScore}
              topScore={this.state.topScore}
          />
          <Title />
          {
              this.state.players.map(player => (
                <Card 
                    name={player.name}
                    image={player.image}
                    selectPlayer={this.selectPlayer}
                    curScore={this.state.curScore}
                />
              ))
          }
          {/* <Footer /> */}
        </Wrapper>
      );
  }
}

export default App;