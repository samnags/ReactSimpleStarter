// import React from 'react';
import React, { Component } from 'react';
  // because we change line 1 to line 2, we can change line 10 form React.Component to Component

// this is a functional component. we'regoing to replace it with class component
  // const SearchBar = () => {
  //   return <input />;
  // };

// class SearchBar extends React.Component {
class SearchBar extends Component {
  // the extends gives us functionality of React Components
  constructor(props)  {
    // we initialize state in a class-based component with constructor
    super(props);
      // component has its own constructor method, that's why we're calling super

    this.state = {term: ''}
      // we want a term property on our state.
      // this term should update when a user types in a search term
      // only inside constructor function do we set state. Otherwise we use this.setState
  }

  render() {
    //instead of calling a function, we're calling render function. All classes need a render function
     return (
       // have to wrap all JS elements with curly braces
       <div className="search-bar">
        <input
          value = {this.state.term}
          onChange={event => this.onInputChange(event.target.value)}

          />
        </div>
     );
  }
  onInputChange(term) {  
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}



export default SearchBar;
  // have to export the component since everything is silo-ed
