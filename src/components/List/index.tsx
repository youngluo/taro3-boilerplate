import Taro, { useDidShow, useReady } from '@tarojs/taro'
import { FC, ReactNode, useEffect } from 'react'
import { View } from '@tarojs/components'

interface IProps {
  header?: string | ReactNode
  footer?: string | ReactNode
}

const List: FC<IProps> = props => {
  useEffect(() => {
    console.log('List mounted')
  }, [])

  useDidShow(() => {
    console.log('List show')
  })

  useReady(() => {
    Taro.createSelectorQuery()
      .select('.list')
      .boundingClientRect(node => {
        console.log('================', node)
      })
      .exec()
  })

  return (
    <View className='list'>
      <View className='header'>{props.header}</View>
      {props.children}
    </View>
  )
}

export default List
