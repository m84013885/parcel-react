'use strict'
import {
  observable,
  action,
  computed
} from 'mobx'

// 请求
class Store {
  // 移动的button
  @action buttonLeftChange (number) {
    this.buttonLeft = number
  }
  @observable buttonLeft = 8

  // 通过移动透明度变化
  @action buttonOpacityChange (number) {
    if(number>57&&number<77){
      this.imgOpacity = (82-number)/20
    }else if(number<57&&number>37){
      this.imgOpacity = (number-37)/20
    }else if(number>=56&&number<=58){
      this.imgOpacity = 1
    }else{
      this.imgOpacity = 0
    }
  }
  @observable imgOpacity = 0

  // 震动
  @action degChange () {
    for(let i =1;i<4;i++){
      let that = this;
      setTimeout(function(){
        that.deg = 8
        setTimeout(function(){
          that.deg = 0
        },100)
        setTimeout(function(){
          that.deg = -8
        },200)
        setTimeout(function(){
          that.deg = 0
        },300)
      },i*350)
    }
  }
  @observable deg = 0

  @action scrollDomChange (dom) {
    this.scrollDom = dom
  }
  @observable scrollDom


  @action boxIndexChange (number) {
    this.boxIndex = number
  }
  @observable boxIndex = 0

  @action startMusicChange (number) {
    this.startMusic = number
  }
  @observable startMusic = 1


  @action musicOpenChange (number) {
    this.musicOpen = number
  }
  @observable musicOpen = 0



  @observable scrollViewDOM

  @observable showHideBox = false
  @observable showHideWrap =false
  @action showBox () {
    setTimeout(() => {
      this.showHideBox = true
    }, 50)
    this.showHideWrap = true
  }
  @action hideBox () {
    setTimeout(() => {
      this.showHideWrap = false
    }, 200)
    this.showHideBox = false
  }

  @observable tips
  @action showTips (obj) {
    this.tips = obj
  }
  @action hideTips () {
    this.tips = null
  }

  @observable load
  @action showLoad (bool) {
    this.load = bool
  }

  @observable swiperTop = 0
  @action autoTop (height) {
    this.swiperTop = height
  }

  @observable domNode
  @action resetDom (length) {
    this.domNode = length
  }
}
const store = new Store()

export default {
  store
}