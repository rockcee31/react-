const div = React.createElement('div', {id: "heading", xyz: "tohir"}, [React.createElement('div',{},
    [React.createElement('h1',{},"child 1 h1"),React.createElement('h2',{},'child 1 h2')]),

    React.createElement('div',{},
        [React.createElement('h1',{},"child 2 h1"),React.createElement('h2',{},'child 2 h2')])


])

//here we created a nested tag by react element but its  bit complex to make it easier  with JSX to create html tags





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div)
// render will replace if there any element inside the root already