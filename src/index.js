import React, { Fragment } from 'react';
import {Pre} from './styledComponent';
const LIGHT = 'light';
const DARK = 'dark';
const lightThemeProperties = {
    background: '#eee',
    color: '#000'
};
const darkThemeProperties = {
    background: '#1E2028',
    color: '#E4AC3D'
};

const CodeFormatter = ({children, theme}) => {
    const properties = theme === LIGHT ? lightThemeProperties: darkThemeProperties;
    return (
        <Fragment>
            <Pre theme={properties}>{children}</Pre>
        </Fragment>
    );
};

export default CodeFormatter;