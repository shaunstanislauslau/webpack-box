// import TS from './ts/index.ts'
import { cube } from '@src/treeShaking'
import { App } from '../packages/react/index'
import React from 'react'
import ReactDom from 'react-dom'

import('@src/ts/index.ts').then(res => {
  console.log(res)
  // eslint-disable-next-line new-cap
  new res.default()
})
require('./style/index.css')
require('./style/app.css')
require('./style/index.less')
require('./style/index.scss')
import('./style/index.postcss')
require('react')
const myPubPic = require('./assets/my-pub.jpeg')
ReactDom.render(<App/>, document.getElementById('app'))
if (process.env.NODE_ENV === 'production') {
  console.log('Welcome to production')
}
console.log(cube(2))
console.log(myPubPic)

const h2 = document.createElement('h2')
h2.className = 'test'
h2.innerText = 'webpack 5'
document.body.append(h2)
