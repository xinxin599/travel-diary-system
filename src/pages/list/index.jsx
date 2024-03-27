import { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'

@inject('store')
@observer
class Index extends Component {
  
  render () {
    const { counterStore: { counter } } = this.props.store
    const msg ="hhhh"
    return (
      <View className='index'>
        <Text>{msg}</Text>
      </View>
    )
  }
}

export default Index
