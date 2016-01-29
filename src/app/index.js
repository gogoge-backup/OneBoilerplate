import React, { Component } from 'react'
import { render } from 'react-dom'
// import style from '../css/style.sass'

//stateless component
const Root = () => {
		return <div><h1>123</h1>q</div>
}
// HMR
if (module.hot) {
  module.hot.accept();
}

//state component
class Hello extends Component{
	render () {
		return (
			<div>
				<h1>Webpack [81] React</h1>
				<div>QQQ</div>
				<div>This is root component</div>
			</div>
		)
	}
}
render(<Hello />,  document.getElementById('react-root'))
