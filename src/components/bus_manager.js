import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class BusManager extends Component {
	constructor(props) {
		super(props);

		this.state = { whore: ''};
	}

	handleChange(event) {
		this.setState({ whore: event.target.value })
	}

	handleSubmit(event) {
		event.preventDefault();

		this.props.saveWhore(this.state.whore);
		this.setState({ whore: '' });
	}

	render() {
		return (
				<form
					onSubmit={this.handleSubmit.bind(this)}
					id="bus-manager">
					<h4>Add one more whore to your buss</h4>
					<input
						value={this.state.whore}
						onChange={this.handleChange.bind(this)} />
					<button action="submit">Click Me</button>
				</form>
		);
	}
}

export default connect(null, actions)(BusManager);
