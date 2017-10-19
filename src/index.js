import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

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
// const App = () => {
//   return ( <div>
//     <SearchBar />
//   </div> );
// }

// Change App to class based component so it can support state,
// to keep track of list of videos
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      // resolves to this.setState({ videos: videos });
      // only works when key and property value are the same name
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={ this.state.videos } />
      </div>
    );
  }
}
// Take this component's generated HTML and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));
