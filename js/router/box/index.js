'use strict'
import React from 'react'
import { observer, inject } from 'mobx-react'
import style from './css'
import styleAdd from '../../config/styleadd'
import One from './../one'
styleAdd(style,'box')
@inject('store') @observer class Box extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {

    return (
        <div className="box-button"></div>
    )
  }
}

export default Box
