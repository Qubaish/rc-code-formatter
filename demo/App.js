import React, { Fragment, useState } from 'react';
import ReactDom from 'react-dom';
import Switcher from 'react-switcher-rc';
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
    const [themeState, setThemeState] = useState('light');

    const onHandleTheme = e => {
        setThemeState(themeState === 'light' ? 'dark' : 'light')
    }

    return (
        <Fragment>
            <Switcher
                name="formatter"
                checked={themeState === 'light'}
                onChange={onHandleTheme}
                checkedIcon="L"
                unCheckedIcon="D"
            />
            <CodeFormatter theme={themeState}>
                {myCode}
            </CodeFormatter>
        </Fragment>
    )
}

ReactDom.render(<App />, document.getElementById('app'));