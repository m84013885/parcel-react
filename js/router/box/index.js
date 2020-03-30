'use strict'
import React from 'react'
import { observer, inject } from 'mobx-react'
import style from './css'

import { css } from '@emotion/core'

import One from './../one'
@inject('store') @observer class Box extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    console.log(this.props)
    return (
      <div className={style.button.name} style={{color:'#333'}}>123</div>
    )
  }
}

export default Box
