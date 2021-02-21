import React, {useContext} from 'react'
import Header from './partials/Header'
import Sidebar from './partials/Sidebar'
import QueryScreen from './partials/QueryScreen'
import {Globalcontext} from '../context/GlobalContext'


function Layout(props) {

  const {isMatched} = useContext(Globalcontext)

  // const [tomatoQuery, setTomatoQuery] = useState([]);
  // const [matched, setMatched] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(tomatoAPI)
  //     setTomatoQuery(result.data)
  //     setTomato(result.data);
  //   }
  //   fetchData();

  //   // match current url to tomato url query
  //   tomatoQuery.forEach(i => {
  //     if (i.root_server_url === root_server_url) {
  //       setMatched(true)
  //     } 
  //   })

  //   setTimeout(() => {
  //     currentRootServerURL(root_server_url);
  //   }, 1000);
    
  //   console.log(root_server_url)
    
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[root_server_url])

  // Display loading component while loading
  // if (isLoading === true) {
  //   return (
  //     // <div>
  //     //   Page Is Loading
  //     // </div>
  //   )
  // } else {
    return (
      <>
        <Header />
        <div className="container">
          {isMatched === false ?
          <h2 className="text-center">Please Select A Root Server</h2>
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
// }

export default Layout
