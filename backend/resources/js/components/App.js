import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from "./NavBar"
import User from "./User"
import About from "./About"

const App = () => {
    return(
      <div>
        <NavBar />
        <User />
        <About />
      </div>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}