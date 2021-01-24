import React, { Component } from 'react'
import './App.css'
import Button from './components/Button'
import Input from './components/Input'
import ClearButton from './components/ClearButton'

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: '',
			previousNumber: '',
			currentNumber: '',
			operator: ''
		}
	}

	addToInput = value => {
		this.setState({input: this.state.input + value})
	}

	addZeroToInput = value => {
		if (this.state.input !== '') {
			this.setState({input:this.state.input + value})
		}
	}

	addDecimal = value => {
		if (this.state.input.indexOf('.') === -1) {
			this.setState({input: this.state.input + value})
		}
	}

	clearInput = () => {
		this.setState({input: ''})
	}

	add = () => {
		this.state.previousNumber = this.state.input;
		this.setState({input: ''});
		this.state.operator = 'add'
	}

	subtract = () => {
		this.state.previousNumber = this.state.input;
		this.setState({input: ''});
		this.state.operator = 'subtract'
	}

		multiply = () => {
		this.state.previousNumber = this.state.input;
		this.setState({input: ''});
		this.state.operator = 'multiply'
		}

		divide = () => {
		this.state.previousNumber = this.state.input;
		this.setState({input: ''});
		this.state.operator = 'divide'
	}

	evaluate = () => {
		this.state.currentNumber = this.state.input

		if (this.state.operator === 'add') {
			this.setState({
				input: parseInt(this.state.previousNumber) + parseInt(this.state.currentNumber)
			})
		} else if (this.state.operator === 'subtract') {
			this.setState({
				input: parseInt(this.state.previousNumber) - parseInt(this.state.currentNumber)
			})
		} else if (this.state.operator === 'multiply') {
			this.setState({
				input: parseInt(this.state.previousNumber) * parseInt(this.state.currentNumber)
			})
		} else if (this.state.operator === 'divide') {
			this.setState({
				input: parseInt(this.state.previousNumber) / parseInt(this.state.currentNumber)
			})
		}
	}

	render() {
		return (
			<div className="App">
				<div className="cal-wrapper">
					<div className="row">
						<Input>{this.state.input === '' ? '0' : this.state.input}</Input>
					</div>
					<div className="row">
						<ClearButton handleClear={this.clearInput}> C </ClearButton>
						<Button>  </Button>
						<Button handleClick={this.divide}> / </Button>
						<Button handleClick={this.multiply}> * </Button>
					</div>
					<div className="row">
						<Button handleClick={this.addToInput}> 7 </Button>
						<Button handleClick={this.addToInput}> 8 </Button>
						<Button handleClick={this.addToInput}> 9 </Button>
						<Button handleClick={this.subtract}> - </Button>
					</div>
					<div className="row">
						<Button handleClick={this.addToInput}> 4 </Button>
						<Button handleClick={this.addToInput}> 5 </Button>
						<Button handleClick={this.addToInput}> 6 </Button>
						<Button handleClick={this.add}> + </Button>
					</div>
					<div className="row">
						<Button handleClick={this.addToInput}> 1 </Button>
						<Button handleClick={this.addToInput}> 2 </Button>
						<Button handleClick={this.addToInput}> 3 </Button>
						<Button handleClick={this.evaluate}> = </Button>
					</div>
					<div className="row">
						<Button Button handleClick={this.addZeroToInput}> 0 </Button>
						<Button handleClick={this.addDecimal}> . </Button>
					</div>
				</div>
			</div>
		)
	}
}

export default App