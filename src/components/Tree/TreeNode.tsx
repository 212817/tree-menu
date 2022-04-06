import { FC, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import { Tree } from './Tree'
import { ITreeNodeProps } from 'types/IMenuSidebar'
import 'animate.css'

export const TreeNode: FC<ITreeNodeProps> = ({ node }) => {
  const [childVisible, setChildVisiblity] = useState(false)
  const hasChild = node.children ? true : false

  const handleVisible = () => {
    setChildVisiblity((v) => !v)
  }

  const handlerLog = (label: string) => {
    console.log(label)
  }

  return (
    <li>
      <div className="tree-node" onClick={handleVisible}>
        {hasChild && (
          <div className={`tree-toggler ${childVisible ? 'active' : ''}`}>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        )}

        <div className="tree-head" onClick={() => handlerLog(node.label)}>
          <i className={` ${node.icon}`}> </i>
          {node.label}
        </div>
      </div>
      {hasChild && childVisible && node.children && (
        <div
          className={`animate__animated animate__fadeIn tree-content ${
            childVisible ? 'active' : ''
          }`}
        >
          <ul className="tree-container">
            <Tree data={node.children} />
          </ul>
        </div>
      )}
    </li>
  )
}
