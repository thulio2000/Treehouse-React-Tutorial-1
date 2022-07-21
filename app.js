const Header = (props) => {
    return (
        <header>
            <h1>{ props.title }</h1>
            <span className="stats" >Players: { props.totalPlayers }</span>
        </header>
    );
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>✖</button>
                { props.name }
            </span>            
            <Counter />
        </div>       
    );
}

class Counter extends React.Component {
    state = {
        score: 0
    };

    incrementScore = () => {
        this.setState( prevState => ({
            score: prevState.score + 1
            
        }));
    }

    decrementScore = () => {
        this.setState ( prevState => ({            
            score: prevState.score - 1            
        }));
    }

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
                <span className="counter-score">{ this.state.score }</span>
                <button className="counter-action increment" onClick={this.incrementScore}> + </button>
            </div>
        );
    }    
}

class App extends React.Component {
    
    setState = {
        players: [
            {
                name: "Luke",                
                id: 1
            },
            {
                name: "Alfredo",                
                id: 2
            },
            {
                name: "Bilbo",                
                id: 3
            },
            {
                name: "Gohan",             
                id: 4
            }
        ]
    }

    handleRemovePlayer = (id) => {
        this.setState( prevState => {
            return {
                players: prevState.players.filter( p => p.id !== id )
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
    
                {/*Players List*/}
                {this.state.players.map( player =>
                    <Player                    
                      name={player.name}
                      id={player.id}
                      key={player.id.toString()}
                      removePlayer={this.handleRemovePlayer}
                    />
                )}
            </div>
        );
    }
    
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


//Elements are the smallest block of react
//Write 2 or more lines of JSX in parenthesis for readability.
// { } in JSX are called a JSX expression
// The curly braces lets JSX know you're writing javascript.
// day #02 - components, a reusable piece of UI. Created as a JS function or class, I'm not sure what
// the latter means
// Apparently, a lot of react syntax is React.createElement(), but converted in a more practical and intuitive way
// Entire UI composition of functions.
/*
day #03 -
Remember to use className instead of class, just like "getElementByClassName()"
day #04 -
React, at the core, is a library for creating and updating HTML elements
Properties are like html attributes, that give more meaning to the components. Most of the UI uses props
Defined in a component's JSX tags
Props === immutable
Like pure functions, they always return the same result for the same input
Notice how each component has one functionality
day #05 -
Keys, a built-in React prop indentifier to keep track of items that change(like our player list). Like html ID's, keys are unique and
not reusable.
day #06 - 
First treehouse react practice, rendering planet cards, with diameter, description and an image of the 
planet. Tricky part was loading the img, aside from that I could render it all
day #07 - I was just getting confused between img tags and the URL property, so it was basically a matter
of syntax and nothing else.
The alt text was used just the name of the planet. It's easy but I still don't know how to place inside
quotes, like:
"Planet {props.name}" --> Planet Earth.

Props are read-only, immutable
State - dynamic, interactive. UI in sync with data
Class components for state
Day #08 -
Using state to handle events
Bind the methods, if they are inside class it's no longer auto bound to the react component
Application State (main, entire app data) and Component State (specific to a component and not shared outside of it)
*/
