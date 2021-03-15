import { View } from '@tarojs/components'
import { FC, ReactNode } from 'react'

interface IProps {
  header?: string | ReactNode
}

const List: FC<IProps> = props => {
  return (
    <View>
      <View>{props.header}</View>
      {props.children}
    </View>
  )
}

export default List
