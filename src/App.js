// import React, { useState, useEffect } from 'react'
// import './scss/App.scss'
// import Axios from 'axios'
// import Header from './components/Header'
// import Search from './components/Search'
// import ReturnedDataFormat from './components/ReturnedDataFormat'
// import QueryString from './components/QueryString'

// function App() {
//   const [query, setQuery] = useState('')
//   const [items, setitems] = useState([])

//   // const inputRef = React.createRef()
//   const updateDataFormat = React.createRef()

//   const updateQuery = () => {
//     // const inputText = inputRef.current.value
//     const formatValue = updateDataFormat.current.value
//     // setQuery(`http://ctna.org/main_server/client_interface/${formatValue}/?switcher=GetSearchResults`)
//     setQuery('https://bmlt.sezf.org/main_server')
//   }

//   useEffect(() => {
//     const setQueryString = query
//     console.log(setQueryString)
//     // get results from api
//     const fetchItems = async () => {
//       const apiResults = await Axios(setQueryString);

//       console.log(apiResults.data)
//     }
//     fetchItems()
//   }, [query]) 

//   return (
//     <div className="main">
//       <Header />
//       <div className="container">
//         {/* <Search inputRef={inputRef} updateQuery={updateQuery}/> */}
//         <ReturnedDataFormat updateDataFormat={updateDataFormat} updateQuery={updateQuery}/>
//         <QueryString query={query} />
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'
import Contacts from './components/Contacts'

    class App extends Component {
      state = {
        contacts: []
      }
      componentDidMount() {
        fetch('http://ctna.org/main_server/client_interface/json/?switcher=GetFormats')
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data })
        })
        .catch(console.log)
      }

      render() {
        console.log(this.state.contacts)
        return (
          <Contacts contacts={this.state.contacts} />
        )
      }
    }
    export default App