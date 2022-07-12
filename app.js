const title = 'My React Element!';
const desc = 'I created a paragraph using React.';
const myTitleID = 'main-title';
const name = 'Lucas';

const header = (
    <header>
        <h1 id={myTitleID}>{name}'s First React Element</h1>
        <p> { desc } </p>
    </header>
);
//Write 2 or more lines of JSX in parenthesis for readability.
// { } in JSX are called a JSX expression

ReactDOM.render(
    header,
    document.getElementById('root')
);