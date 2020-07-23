import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-cmake';
import './styles.css';

// code will be generated from reading the file
// there will be a class here that has callbacks to 
// read / write as well as getters
const code = `function add(a, b) {
    return a + b;
  }
  `;

class FileGUI extends React.Component
{
    state = { code };
    render() {
        return (
            <Editor
                value={this.state.code}
                onValueChange={code => this.setState({ code })}
                highlight={code => highlight(code, languages.cmake)}
                padding={10}
                style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
                }}
            />
        );
    }
}

export default FileGUI;