export interface ITree {
  id: string
  label: string
  icon: string
  title: string
  children?: ITree[]
}

export interface ITreeProps {
  data: ITree[]
}

export interface ITreeNodeProps {
  node: ITree
}
