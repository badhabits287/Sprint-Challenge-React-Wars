import React from 'react';
import Character from "./components/Character";




function App(props) {
  console.log('props',props)
  return (
    <div className="App">
      <div className="logo_container">
      <h1>ReactJS Sprint #1</h1>
        
        <Character />
      </div>
    </div>
  );
}

export default App;
