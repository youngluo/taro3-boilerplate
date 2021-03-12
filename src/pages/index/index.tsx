import { FC, useEffect, useCallback, useRef, useState } from 'react'
import { View } from '@tarojs/components'
import _ from 'lodash'
import List from '../../components/List'
import './index.module.scss'

const Index: FC = () => {
  const [data, setData] = useState<any[]>([])
  const ref = useRef(null)

  const getData = useCallback(() => {
    setData(prev => [
      ...prev,
      ..._.map(_.range(1, 10), item => ({ name: _.random(), value: item }))
    ])
  }, [])

  useEffect(() => {
    getData()
  }, [getData])

  return (
    <>
      {data.map(item => (
        <List key={item.value}>
          <View
            style={{ height: '40px' }}
            ref={ref}
          >
            <View>{item.name}</View>
            <View>{item.value}</View>
          </View>
        </List>
      ))}
      <View
        onClick={getData}
        className='more'
      >更新数据
      </View>
    </>
  )
}

export default Index
