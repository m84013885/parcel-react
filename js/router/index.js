'use strict'
import React from 'react'
// import style from './css.css'
import stores from './stores'
import { Provider } from 'mobx-react' // 供应stores

// import Box from './box'
class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state={

    }

  }
  
  render () {
    return (
      <Provider {...stores}>
        <div>
          123
        </div></Provider>
    )

  }
}
export default Index