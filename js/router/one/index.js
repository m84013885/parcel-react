'use strict'
import React from 'react'
import { observer, inject } from 'mobx-react'

@inject('store') @observer class One extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
        <div>
            
        </div>
    )
  }
}

export default One
