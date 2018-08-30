'use strict'
import React from 'react'
import { observer, inject } from 'mobx-react'
import One from './../one'

@inject('store') @observer class Box extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {

    return (
        <div>
            <One/>
        </div>
    )
  }
}

export default Box
