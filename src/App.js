import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <h1>react-routerに入門する。</h1>
    <nav>
      <ul>
        <li><Link to='/'>Index</Link></li>
        <li><Link to='/second'>Second</Link></li>
        <li><Link to='/third'>Third</Link></li>
      </ul>
    </nav>
    <article>
      <Route exact path='/' component={Index} />
      <Route path='/second' component={Second} />
      <Route path='/third' component={Third} />
    </article>
  </BrowserRouter>
)

const Index = () => (
  <div>
    <h2>Index</h2>
    <p>インデックスページ</p>
  </div>
)
const Second = () => (
  <div>
    <h2>Second</h2>
    <p>二番目のページです</p>
  </div>
)
const Third = () => (
  <div>
    <h2>Third</h2>
    <p>三番目のページです</p>
  </div>
)

export default App