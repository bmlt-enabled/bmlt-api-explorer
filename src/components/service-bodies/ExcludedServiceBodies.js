import React, { useState, useEffect} from 'react'
import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'
import ServiceBodyList from './ServiceBodyList'

function ExcludedServiceBodies(props) {

//  console.log(ServiceBodyList())
  const ServiceBodyApi = props.serverUrl + '/client_interface/jsonp/?switcher=GetServiceBodies'

  // Get data from api
  const [serviceBody, setServiceBody ] = useState([])

  function handleOnChange(e) {
    console.log(props)
  }

  useEffect(() => {
    const fetchData = async () => {

      await axios({
        url: ServiceBodyApi,
        adapter: jsonpAdapter
      }).then((res) => {
        setServiceBody(res.data)
      })
    }
    fetchData();
  },[ServiceBodyApi]);

  
  const renamed = serviceBody.map(item => {
    return { id: item.id, label: item.name, value: item.id, parent_id: item.parent_id, type: item.type };
  });

  console.log(renamed)
// const servicearray = []

// serviceBody.map(body => (
// servicearray.push(body.parent_id)
// ))
/////////////
// Create root for top-level node(s)
// const root = [];
// serviceBody.forEach(node => {
//   // No parent_id means top level
//   if (node.parent_id === '0')
//   return root.push(node);

//   // Insert node as child of parent in serviceBody array
//   const parentIndex = serviceBody.findIndex(el => el.id === node.parent_id);
//   if (!serviceBody[parentIndex].children) {
//     return serviceBody[parentIndex].children = [node];
//   } 
//   serviceBody[parentIndex].children.push(node);
// });

// console.log(root)



// function ListItem({ item }) {
//   let children = null;
//   if (item.children && item.children.length) {
//     children = (
//       <div>
//         {item.children.map(i => <ListItem item={i} key={i.id} />)}
//       </div>
//     )
//   } 

//   return (
//     <div>
//       <input type="checkbox" />
//       <label>{item.name}</label>
//       {children}
//     </div>
//   )
// }


  return (
    <section>
      <ServiceBodyList serviceArray={renamed} onChange={this.props} />
      {/* <div className="card-header">
        <h3>Excluded Service Bodies</h3>
      </div>
      <div className="card-body">
        <div className="row" id="excludedServiceBodies"> */}
        
          {/* {root.map(p => (
            <div>
            <div className="col-12 mb-2" key={p.id}>
            <input type="checkbox" />
            <label>{p.name}</label>
            </div>
            
            {p.children.map(c => (
              <div key={c.id}>
                <input type="checkbox" />
                <label>{c.name}</label>
              </div>
            ))}
            </div>
          ))} */}
          {/* {serviceBody.map(body => (
            <div className="col-12 mb-2" key={body.id}>
              <input  data-layout={body.type} type="checkbox" value={`&services[]=-${body.id}`} onChange={props.onChange}/>
              <label className="ml-3 mb-0">{body.name}</label>
            </div>
          ))} */}
        {/* </div>
      </div>
      <div className="filter">
      </div> */}
    </section>
  )
}

export default ExcludedServiceBodies
