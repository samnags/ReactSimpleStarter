// Need to request React. It's installed in node modules folder
// Find the library react and assign it to variable React
import _ from 'lodash';
import React, { Component} from 'react';
  // ^^ core React library knows how to work with React components

import ReactDOM from 'react-dom';
  // Taking react components and putting them in dom, we use React DOM libary

import SearchBar from './components/search_bar';
  // Have to give file reference for components

import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDyQ0vXOFqsGFEHsg_A7OwX2lr8uuApHj8';

// in React, we're writing individual components or views that produce html
// Create a new component. That component will create html
// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   )
// }

// Refactoring 21-29 to change it from functional to class because we want it to have a state
class App extends Component {
  // constructor runs right away and then immediately makes search with terms
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards')
  }

  videoSearch(term) {
    // using setState with video searh
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
      // this.setState({{videos: videos}}) same as this.setState({videos})
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      // passing data from parent app to child. Passing props
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail  video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          // function that manipulates another component
          // we're passing this as a property to videoList so now in video_list, there's a prop that is props.onVideoSelect
          videos={this.state.videos} />
      </div>
    )
  }
}

// Whenever key and value are same string, you can condense it to { name of variable }
// YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
//   this.setState({videos: videos})
// });


// It looks like we're writing html but it's actually JSX.
// Need our babel/etc to transpile JSX


// We have to get component's generated HTML into the DOM

  // We need to instantiate components before rendering to DOM
ReactDOM.render(<App />, document.querySelector('.container'))
// <App /> if there isn't anything between opening and closing tag, you can use self closing tag
// Second argument is reference to DOM node on page
