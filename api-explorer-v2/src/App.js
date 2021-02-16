import React from 'react'
import './scss/App.scss'
import Layout from './layout/Layout'

import {TomatoProvider} from './context/GlobalContext'


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
