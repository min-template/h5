import './index.less'

import * as utils from './units'

function hello() {
  if (utils.getUrlPara('test')) {
    console.log('test')
  } else {
    console.log('not test')
  }
}

$(() => {
  $('body').append('<h1>Hello Min</h1>')
  hello()
})