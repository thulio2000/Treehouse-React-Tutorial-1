const title = React.createElement(
    // type , attribute, content
    'h1',
    {id: 'main-title', title: 'insert-here'},
    'My First React Element!'    
);

// <h1 id="main-title" title="insert-here">My First React Element!</h1>

ReactDOM.render(
    title,
    document.querySelector("#root")
);

console.log(title);