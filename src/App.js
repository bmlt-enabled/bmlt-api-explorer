import React, { useState, useEffect } from 'react';
import './scss/App.scss';
import Axios from 'axios';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  const [query, setQuery] = useState('');
  const [items, setitems] = useState([]);

  const inputRef = React.createRef()
  const updateQuery = () => {
    const inputText = inputRef.current.value
    setQuery(inputText)
  }
  useEffect(() => {
    const setQueryString = `http://${query}/main_server/client_interface/csv/?switcher=GetSearchResults`
    console.log(setQueryString)
    // get results from api
    const fetchItems = async () => {
      const apiResults = await Axios(setQueryString);

      console.log(apiResults.data)
    }
    fetchItems()
  }, [query]) 

  return (
    <div className="main">
      <Header />
      <div className="container">
        <Search inputRef={inputRef} updateQuery={updateQuery}/>
      </div>
    </div>
  );
}

export default App;
