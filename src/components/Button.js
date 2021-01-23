import React, { Component } from 'react'
import './Button.css'

class Button extends Component {
	isOperator = value => {
		return !isNaN(value) || value === '.' || value === '='
	}

	render() {
		return (
			<div onClick={() => this.props.handleClick (this.props.children)}>
				{this.props.children}
			</div>
		)
	}
}

export default Button