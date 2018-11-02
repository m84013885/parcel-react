'use strict'
import React from 'react'
import { observer, inject } from 'mobx-react'
import style from './css'

import styled,{ css } from 'react-emotion'
const Container = styled('div')`
  background-color:#ddd;
`

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
      <Container>123<span className={style.button}>123</span></Container>
    )
  }
}

export default Box
