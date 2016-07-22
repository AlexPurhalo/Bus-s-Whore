import React, { Component } from 'react';

export default class BusManager extends Component {
	constructor(props) {
		super(props);

		this.state = { whore: ''};
	}

	handleChange(event) {
		this.setState({ whore: event.target.value })
	}

	handleSubmit(event) {
		event.preventDefault();

		this.setState({ whore: '' });
	}

	render() {
		return (
				<form
					onSubmit={this.handleSubmit.bind(this)}
					id="bus-manager">
					<input
						value={this.state.whore}
						onChange={this.handleChange.bind(this)} />
					<button action="submit">Click Me</button>
				</form>
		);
	}
}
