import React from 'react';
import { connect } from 'react-redux';

const BusList = (props) => {
	console.log(props);
	return (
		<ul id="bus-list">
			{
				props.whores.map(whore => {
					return <li key={whore}>{whore}</li>
				})
			}
		</ul>
	);
};

function mapStateToProps(state) {
	return { whores: state.whores}
}
export default connect(mapStateToProps)(BusList);
