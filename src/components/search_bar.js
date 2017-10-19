import React, { Component } from 'react';

/* Functional component
const SearchBar = () => {
  return <input />;
};
*/

/* Class component */
class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  render() {
    console.log("render");
    return (
      <div>
        <input
          value= { this.state. term }
          onChange={ event => this.setState({ term: event.target.value }) }/>
      </div>
    );

  }

  // onInputChange(event) {
  //
  // }
}

export default SearchBar;
