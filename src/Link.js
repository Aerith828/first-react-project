import React from 'react';

const Link = ( {attribute} ) => {
    return(
    <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {attribute}
      </a>);
};

export default Link;