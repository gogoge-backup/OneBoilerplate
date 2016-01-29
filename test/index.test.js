import mocha from 'mocha'
import { expect } from 'chai'
import sinon from 'sinon'
// import deepFreeze from 'deep-freeze'

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'

import  Main  from 'components/Main'

// import createJSDOM from './jsdom'
// createJSDOM()

// import { EventEmitter as Event } from 'events'

const createShallowComponnet = (node) => {
	const renderer = TestUtils.createRenderer()
	renderer.render(node)
	const outputTree = renderer.getRenderOutput()

	return {
		renderer,
		outputTree
	}
}

// const { actions: { login, login_btn_click }, recaptcha_response, fields: { userName, password } } = this.props
describe('Login component', () => {

	describe('after form submit', () => {
		const { renderer, outputTree } = createShallowComponnet(<Main />)
		it('hi', () => {
			console.log(outputTree)
		})
	})
})
