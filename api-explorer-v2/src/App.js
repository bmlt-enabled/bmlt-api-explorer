import React, {useState, useEffect} from 'react'
import axios from 'axios'
// import {Tomato} from './api/switchers'
import './scss/App.scss'
import Layout from './layout/Layout'

import {TomatoProvider} from './context/Tomato'


function App() {

  return (
    <div className="App">
      <TomatoProvider>
      <Layout>
        This is the main layout
      </Layout>
      </TomatoProvider>
    </div>
  );
}

export default App;
