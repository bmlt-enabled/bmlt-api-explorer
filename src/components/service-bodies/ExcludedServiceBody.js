import React, { useContext, useEffect, useState } from 'react'
import CheckboxTree from 'react-checkbox-tree'
import { Globalcontext } from '../../context/GlobalContext'
import { Querycontext } from '../../context/QueryContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCheckSquare,
    faChevronDown,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import {
    faSquare,
    faFolder,
    faFolderOpen,
    faFile,
} from '@fortawesome/free-regular-svg-icons'

const ExcludedServiceBody = () => {
    const { excludedBodiesFunction } = useContext(Querycontext)
    const { serviceBodies } = useContext(Globalcontext)
    const [checked, setChecked] = useState([])
    const [expanded, setExpanded] = useState([])

    useEffect(() => {
        excludedBodiesFunction(checked)
    }, [checked])

    const CheckTree = () => {
        return (
            <CheckboxTree
                nodes={serviceBodies}
                checked={checked}
                expanded={expanded}
                onCheck={(checked) => setChecked(checked)}
                onExpand={(expanded) => setExpanded(expanded)}
                icons={{
                    check: (
                        <FontAwesomeIcon
                            className="rct-icon rct-icon-check"
                            icon={faCheckSquare}
                        />
                    ),
                    uncheck: (
                        <FontAwesomeIcon
                            className="rct-icon rct-icon-uncheck"
                            icon={faSquare}
                        />
                    ),
                    halfCheck: (
                        <FontAwesomeIcon
                            className="rct-icon rct-icon-half-check"
                            icon={faSquare}
                        />
                    ),
                    expandClose: (
                        <FontAwesomeIcon
                            className="rct-icon rct-icon-expand-close"
                            icon={faChevronRight}
                        />
                    ),
                    expandOpen: (
                        <FontAwesomeIcon
                            className="rct-icon rct-icon-expand-open"
                            icon={faChevronDown}
                        />
                    ),
                    parentClose: (
                        <FontAwesomeIcon
                            className="rct-icon rct-icon-parent-close d-none"
                            icon={faFolder}
                        />
                    ),
                    parentOpen: (
                        <FontAwesomeIcon
                            className="rct-icon rct-icon-parent-open d-none"
                            icon={faFolderOpen}
                        />
                    ),
                    leaf: (
                        <FontAwesomeIcon
                            className="rct-icon rct-icon-leaf-close d-none"
                            icon={faFile}
                        />
                    ),
                }}
            />
        )
    }

    return (
        <section className="card interface-selectors">
            <div className="card-header">
                <h3>Excluded Service Bodies</h3>
            </div>
            <div id="IncludedFormats" className="card-body">
                <CheckTree />
            </div>
        </section>
    )
}

export default ExcludedServiceBody
