import React from 'react';
import SplitPane from 'react-split-pane';
import './App.css';

import FileGUI from './frontend/cmake/fileReader'
// The entry point for the application
function App() {
  return (

    // GUI screen
    // hardcoded sizes for now both main components will be responsible for size
      <SplitPane split="vertical" minSize={350} defaultSize={350}>
        <div className="App">
          <header className="App-header">
            <p>
            Hello.
            </p>
          </header>
        </div>

      {/* The Cmake screen*/ }
        <div>
          <FileGUI>

          </FileGUI>
        </div>
       </SplitPane>
  );
}

export default App;
