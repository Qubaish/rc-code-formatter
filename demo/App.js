import React from 'react';
import ReactDom from 'react-dom';
import CodeFormatter from '../src';
const myCode = `
import React from 'react';
import ReactDom from 'react-dom';
function App() {
    return (
        <CodeFormatter theme="dark">
            {myCode}
        </CodeFormatter>
    )
}

`;

function App() {
    return (
        <CodeFormatter theme="light">
            {myCode}
        </CodeFormatter>
    )
}

ReactDom.render(<App />, document.getElementById('app'));