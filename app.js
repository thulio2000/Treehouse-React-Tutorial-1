const players = [
    {
        name: "Luke",
        score: 3
    },
    {
        name: "Alfredo",
        score: 60
    },
    {
        name: "Bilbo",
        score: 50
    },
    {
        name: "Gohan",
        score: 27
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

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{ props.score }</span>
            <button className="counter-action increment"> + </button>
        </div>
    )
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
                  name={props.name} 
                  score={props.score}                    
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
*/
