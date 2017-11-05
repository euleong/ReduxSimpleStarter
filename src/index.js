import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

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
      selectedVideo: null,
    };

    this.videoSearch('apple watch nike');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // resolves to this.setState({ videos: videos });
      // only works when key and property value are the same name
      this.setState({
        videos,
        selectedVideo: videos[0],
       });
    });
  }

  render() {
    // debounce takes inner function and return inner function that is called
    // once every 300ms
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={ videoSearch } />
        <VideoDetail video={ this.state.selectedVideo }/>
        <VideoList onVideoSelect={ selectedVideo => this.setState({ selectedVideo })}
                   videos={ this.state.videos } />
      </div>
    );
  }
}
// Take this component's generated HTML and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));
