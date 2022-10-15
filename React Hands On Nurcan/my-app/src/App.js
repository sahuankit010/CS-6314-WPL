import React, { Component } from 'react';
import Videos from './Components/videos';


class App extends Component {

  state = {
    videos: []
  }

  componentDidMount() {
    fetch('videos.json')
      .then(res => res.json())
      .then((data) => {
        // debugger;
        console.log(data)
        this.setState({ videos: data })
      })
      .catch(console.log)
  }

  render() {
    return (
      <Videos videos={this.state.videos} />
    )

  }
}

export default App;