const Header = () => {
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats" >Players: 1</span>
        </header>
    );
}

const Player = () => {
    return (
        <div className="player">
            <span className="player-name">
                Lucas
            </span>            
            <Counter />
        </div>       
    );
}

const Counter = () => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">27</span>
            <button className="counter-action increment"> + </button>
        </div>
    )
}

const App = () => {
    return (
        <div className="scoreboard">
            <Header />

            {/*Players List*/}
            <Player />
        </div>
    );
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
*/