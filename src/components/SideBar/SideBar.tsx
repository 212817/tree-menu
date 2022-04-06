import { useEffect, useState } from 'react'
import { AxiosResponse } from 'axios'

import { Tree } from 'components/Tree'
import { ITree } from 'types/IMenuSidebar'
import { getMenuService } from 'services/menuService'
import './index.scss'

export function SideBar() {
  const [menu, setMenu] = useState<ITree[]>([])

  useEffect(() => {
    getMenuService()
      .then(({ data }: AxiosResponse<ITree[]>) => {
        setMenu(data)
      })
      .catch((err) => console.log(err?.message))
  }, [])

  return (
    <div className="sidebar">
      <Tree data={menu} />
    </div>
  )
}
