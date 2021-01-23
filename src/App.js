import React, { Component } from 'react'
import './App.css'
import Button from './components/Button'
import Input from './components/Input'
import ClearButton from './components/ClearButton'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			input: '',
			previousNumber: '',
			currentNumber: '',
			operator: '',
		}
	}

	addToInput = value => {
		this.setState({ input: this.state.input + value})
	}

	render() {
		return (
			<div className="app">
					<div className="input">
						<Input>000</Input>
					</div>
				<div className="grid-container">
					<div className='button' id="clear">C</div>
					<div className="b"></div>
					<div className='operator'>÷</div>
					<div className='operator'>×</div>
					<div className='button' handleClick={this.addToInput}>7</div>
					<div className='button'>8</div>
					<div className='button'>9</div>
					<div className='operator'>-</div>
					<div className='button'>4</div>
					<div className='button'>5</div>
					<div className='button'>6</div>
					<div className='operator'>+</div>
					<div className='button'>1</div>
					<div className='button'>2</div>
					<div className='button'>3</div>
					<div className='operator' id='equals'>=</div>
					<div className='button' id='zero'>0</div>
					<div className='button'>.</div>
				</div>
			</div>
		)
	}
}

export default App;
