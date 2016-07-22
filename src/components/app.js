import React, { Component } from 'react';
import BusManager from './bus_manager';
import BusList from './bus_list';

export default class App extends Component {
	render() {
		return (
			<div>
				<BusManager />
				<BusList />
			</div>
		);
	}
}

