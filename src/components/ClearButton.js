import React, { Component } from 'react'

class ClearButton extends Component {
	render() {
		return (
			<div className="clear-button">
				{this.props.children}
			</div>
		)
	}
}

export default ClearButton