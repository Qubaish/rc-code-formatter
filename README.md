# Code Formatter Component For React

* Demo : <a href="https://codesandbox.io/s/rc-code-formatter-zme1k">Live Demo</a>

# Features
* Format your code with different color schemes

## Installation

```bash
npm install rc-code-formatter
```

```javascript
import React from 'react';
import CodeFormatter from 'rc-code-formatter';
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
        <CodeFormatter theme="dark">
            {myCode}
        </CodeFormatter>
    )
}

```

| Props         | Type          | Description  |
| ------------- |:-------------:| :-----:       |
| theme       | string       | Property to define your code formatter either `light` or `dark`|
| children       | string       | Template literals string of your code|

