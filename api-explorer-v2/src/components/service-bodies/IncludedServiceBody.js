import React, {useContext, useState} from 'react'
import CheckboxTree from 'react-checkbox-tree';
import {Globalcontext} from '../../context/GlobalContext'
import {Querycontext} from '../../context/QueryContext'

function IncludedServiceBody() {

  const {serviceBodies} = useContext(Globalcontext)
  const [ checked, setChecked ] = useState([])
  const [ expanded, setExpanded ] = useState([])

  // Rename Values
  const renamed = serviceBodies.map(item => {
    return { id: item.id, label: item.name, value: item.id, parent_id: item.parent_id, type: item.type };
  });
  
  // Set empty array
  const servicearray = []

  // Isolate ID into array
  renamed.map(body => (
  servicearray.push(body.parent_id)
  ))
  
  // Create root for top-level node(s)
  const root = [];
  renamed.forEach(node => {
    // No parent_id means top level
    if (node.parent_id === '0')
    return root.push(node);

    // Insert node as child of parent in serviceBody array
    const parentIndex = renamed.findIndex(el => el.id === node.parent_id);
    if (!renamed[parentIndex].children) {
      return renamed[parentIndex].children = [node];
    } 
    renamed[parentIndex].children.push(node);
  });
  

  console.log(root)
  
  return (
    <div>
      
      <CheckboxTree
        // onChange={changeMe}
        nodes={root}
        checked={checked}
        expanded={expanded}
        onCheck={checked => setChecked(checked)}
        onExpand={expanded => setExpanded(expanded)}
        // value={`&services[]=-${this.value}`}
       />
    </div>
  )
}

export default IncludedServiceBody
