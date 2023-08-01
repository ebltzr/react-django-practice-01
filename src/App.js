import axios from "axios";
import React from 'react';

class App extends React.Component {
  // create state object
  state = {
    // add details or an empty list, 
    details: [],
  }

// here we will use the ComponentDidMount
componentDidMount() {
    // declare a variable called data,
    let data;
    // here we want to get our backend server
    axios.get('http://localhost:8000')
    // here we take a response as an argument and we want to return data
    .then(res => {
      // we will assign data
      data = res.data
      this.setState({
        // here the details will be set to whatever data we will get
        details: data
      });
    })
    // here if any errors, in case of error we will have an empty object or you can return a message - in this case leaving it empty
    .catch(err => { })
  }
  
  // now here we want to render, what do we want to render? -> everything basically
  render() {
    return (
      <div>
        <header>Data Generated from Django</header>
        {/* one horizontal line */}
        <hr></hr>
        {/* now what we want to do is to map each ID for each output and we will use an array method called map */}
        {/*  beaware of the es6 classes array methods - */}
        {/* deatils - is above previous which is set to data */}
        {/* map - takes two parameters - this should return the output we see on the screen */}
        {this.state.details.map((output, id) => (
          <div key={id}>
            <div>
            <h2>{output.employee}</h2>
            <h3>{output.department}</h3>
            </div>
          </div>
        ) )}
      </div>
    )
  }
}

export default App;
