'use strict'
import React from 'react'
import { observer, inject } from 'mobx-react'
import style from './css'
import One from './../one'

@inject('store') @observer class Box extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {

    return (
        <div style={style.button}></div>
    )
  }
}

export default Box
