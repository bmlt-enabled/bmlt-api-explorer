import React, { Component } from 'react'
import Formats from './components/Formats'
import Header from './components/Header'
import './scss/App.scss'

    class App extends Component {
      

      render() {
        return (
          <div className="container">
            <Header />
            <Formats />
          </div>
        )
      }
    }
    export default App