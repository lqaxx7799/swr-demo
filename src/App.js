import React from 'react';
import './App.css';
import MyComponent from './MyComponent';
import AnotherComponent from './AnotherComponent';
import InfiniteComponent from './InfiniteComponent';

function App() {
  const currentPath = window.location.pathname;
  return (
    <div className="App">
      {
        currentPath === '/' ? (
          <>
            <MyComponent />
            <AnotherComponent />
          </>
        ) : currentPath === '/infinite' ? (
          <InfiniteComponent />
        ) : null
      }
    </div>
  );
}

export default App;
