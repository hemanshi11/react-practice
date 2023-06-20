
import './App.css';
 
import React, { Component } from 'react'
import News from './components/News1';
// import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        hello this is class based component
        {/* <News/> */}
        <News/>
      </div>
    )
  }
}
