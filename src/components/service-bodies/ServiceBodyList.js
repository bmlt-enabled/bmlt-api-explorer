import React from 'react'
import CheckboxTree from 'react-checkbox-tree';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import {faSquare, faFolder, faFolderOpen, faFile} from '@fortawesome/free-regular-svg-icons'

function ServiceBodyList(props) {

  const serviceBody = props.serviceArray

// Create root for top-level node(s)
const root = [];
serviceBody.forEach(node => {
  
  // No parent_id means top level
  if (node.parent_id === '0')
  return root.push(node);
 
  // Insert node as child of parent in serviceBody array
  const parentIndex = serviceBody.findIndex(el => el.id === node.parent_id);
  if (!serviceBody[parentIndex].children) {
    return serviceBody[parentIndex].children = [node];
  } 
  serviceBody[parentIndex].children.push(node);
});

class ListItem extends React.Component {
  state = {
      checked: [],
      expanded: [],
  };

  render() {
      return (
          <CheckboxTree
              nodes={root}
              checked={this.state.checked}
              expanded={this.state.expanded}
              onCheck={checked => this.setState({ checked })}
              onExpand={expanded => this.setState({ expanded })}
              value={`&services[]=-${this.value}`}
              icons={{
                check: <FontAwesomeIcon className="rct-icon rct-icon-check" icon={faCheckSquare} />,
                uncheck: <FontAwesomeIcon className="rct-icon rct-icon-uncheck" icon={faSquare} />,
                halfCheck: <FontAwesomeIcon className="rct-icon rct-icon-half-check" icon={faSquare} />,
                expandClose: <FontAwesomeIcon className="rct-icon rct-icon-expand-close" icon={faChevronRight} />,
                expandOpen: <FontAwesomeIcon className="rct-icon rct-icon-expand-open" icon={faChevronDown} />,
                parentClose: <FontAwesomeIcon className="rct-icon rct-icon-parent-close d-none" icon={faFolder} />,
                parentOpen: <FontAwesomeIcon className="rct-icon rct-icon-parent-open d-none" icon={faFolderOpen} />,
                leaf: <FontAwesomeIcon className="rct-icon rct-icon-leaf-close d-none" icon={faFile} />
            }}
          />
      );
  }
}


console.log(root)
  return (
    <ListItem onChange={props.onChange}/>
  )
}


export default ServiceBodyList