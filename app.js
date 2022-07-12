const title = React.createElement(
    // type , attribute, content
    'h1',
    {id: 'main-title', title: 'insert-here'},
    'My First React Element!'    
);

// <h1 id="main-title" title="insert-here">My First React Element!</h1>

const desc = React.createElement(
    'p',
    null,
    'I just created a paragraph using react'
);

const header = React.createElement(
    'header',
    null,
    title,
    desc
);

ReactDOM.render(
    header,
    document.querySelector("#root")
);

console.log(title);