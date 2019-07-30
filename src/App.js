import React from 'react';
import Posts from './components/Posts';
import Postform from './components/Postform';

function App() {
  return (
    <div className="App">
      <Postform />
      <hr/>
      <Posts />
    </div>
  );
}

export default App;
