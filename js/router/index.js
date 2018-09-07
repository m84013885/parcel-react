'use strict'
import React from 'react'
// import style from './css'
import stores from './stores'
import { Provider } from 'mobx-react' // 供应stores

import Box from './box'
class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state={

    }

  }
  
  render () {
    return (
      <Provider {...stores}>
        <Box/>
      </Provider>
    )

  }
}
export default Index