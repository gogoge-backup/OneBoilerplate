import React, { Component } from 'react'
import { render } from 'react-dom'
// import style from '../css/style.sass'
//stateless component
const Root = () => {
		return <div><h1>123</h1>q</div>
}
// HMR
// if (module.hot) {
//   module.hot.accept();
// }

//state component
export default class Hello extends Component{
	constructor(props){
		super(props)
		this.state = { click: false }
	}
	click = () => {
		this.setState({click:true})
	};
	render () {
		return (
			<div>
				<h1 onClick={this.click}>Webpack [81] React</h1>
				<div>{this.state.click.toString()}</div>
				<div>This is root component</div>
			</div>
		)
	}
}
