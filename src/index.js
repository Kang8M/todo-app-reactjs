import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class HelloWord extends React.Component {
    render() {
        return(
            <h1>Hello World!!!</h1>
        );
    }
}

ReactDOM.render(
    <HelloWord />,
    document.getElementById('root')
);