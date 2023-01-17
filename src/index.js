import React from 'react';
import ReactDOM from 'react-dom';

import "./index.css";
import User from './components/User';

function App() {
  return (
    <div className='bgColor'>
      <h1>Hello React from Webpack</h1>
      <User name="AnhNguyen"/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));