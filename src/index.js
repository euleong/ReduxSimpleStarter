import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDYdsakIaAim5fM6ZS4SIjTZAOkGpkONbo';

// Create a new component
// This component should product some HTML
/*
const App = function() {
  return <div>Hi!</div>;
}
*/
// using es6 syntax
// App is functional component
const App = () => {
  return ( <div>
    <SearchBar />
  </div> );
}
// Take this component's generated HTML and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));
