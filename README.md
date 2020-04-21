# Code Formatter Component For React

![npm](https://img.shields.io/npm/v/rc-code-formatter)
![npm](https://img.shields.io/npm/dm/rc-code-formatter)
[![gzip size](http://img.badgesize.io/https://unpkg.com/rc-code-formatter/lib/index.js?compression=gzip)](https://unpkg.com/rc-code-formatter/lib/index.js)

* Demo : <a href="https://codesandbox.io/s/rc-code-formatter-zme1k">Live Demo</a>

# Description
* Format your code with different color schemes
* Very light weight and very useful to add code logic in your blogs
* Stay tunned more functionalities are coming

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

## License

MIT

