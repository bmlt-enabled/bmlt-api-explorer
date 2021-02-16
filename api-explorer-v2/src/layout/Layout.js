import React, {useState, useEffect, useContext} from 'react'
import Header from './partials/Header'
import Sidebar from './partials/Sidebar'
import QueryScreen from './partials/QueryScreen'
import ServerSelect from '../components/ServerSelect'
import {TomatoContext} from '../context/Tomato'
import {Tomato} from '../api/switchers'
import axios from 'axios'


function Layout(props) {

  const {currentRootServerURL, isLoading, setTomato} = useContext(TomatoContext)

  const [tomatoQuery, setTomatoQuery] = useState([]);
  const [matched, setMatched] = useState(false);

  const currentURL = window.location.hostname;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(Tomato)
      setTomatoQuery(result.data)
      setTomato(result.data);
    }
    fetchData();

    // match current url to tomato url query
    tomatoQuery.forEach(i => {
      if (i.root_server_url === currentURL) {
        setMatched(true)
      } 
    })
    setTimeout(() => {
      currentRootServerURL(currentURL);
    }, 1000);
    
    
  }, [])



  // Display loading component while loading
  if (isLoading === true) {
    return (
      <div>
        Page Is Loading
      </div>
    )
  } else {
    return (
      <>
        <Header />
        <div className="container">
          {matched === false ?
          <ServerSelect/>
          : 
          <div className="row">
          <div className="col-md-4">
            <Sidebar />
          </div>
          <div className="col-md-8">
            <QueryScreen />
          </div>
        </div>
        }
      </div>
        
      </>
    )
  }
}

export default Layout
