const players = [
    {
        name: "Luke",
        score: 3,
        id: 1
    },
    {
        name: "Alfredo",
        score: 60,
        id: 2
    },
    {
        name: "Bilbo",
        score: 50,
        id: 3
    },
    {
        name: "Gohan",
        score: 27,
        id: 4
    }
];

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
                { props.name }
            </span>            
            <Counter score={props.score} />
        </div>       
    );
}

class Counter extends React.component {
    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <span className="counter-score">{ this.props.score }</span>
                <button className="counter-action increment"> + </button>
            </div>
        );
    }    
}

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header 
              title="Scoreboard" 
              totalPlayers={props.initialPlayers.length}
            />

            {/*Players List*/}
            {props.initialPlayers.map( player =>
                <Player                    
                  name={player.name} 
                  score={player.score}  
                  key={player.id.toString()}                  
                />
            )}
        </div>
    );
}

ReactDOM.render(
    <App initialPlayers={players} />,
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
*/
