import { FC } from 'react'

import './index.scss'
import 'animate.css'
import { TreeNode } from './TreeNode'
import { ITreeProps } from 'types/IMenuSidebar'

export const Tree: FC<ITreeProps> = ({ data = [] }) => {
  return (
    <div className="tree-wrapper">
      <ul className="tree-container">
        {data.map((tree) => (
          <TreeNode key={tree.id} node={tree} />
        ))}
      </ul>
    </div>
  )
}
