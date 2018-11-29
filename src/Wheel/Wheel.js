import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setArchetypes, setSelected } from '../redux/reducer';

class Wheel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			primary: {},
			secondary: {},
			link: {}
		};
	}

	componentDidMount() {
		this.props.setArchetypes();
	}

	render() {
		let archetypes = this.props.archetypes.map((elem) => <h1>{elem.name}</h1>);
		return <div className="App">{archetypes}</div>;
	}
}

function mapStateToProps(state) {
	const { archetypes } = state;
	return {
		archetypes
	};
}

export default connect(
	mapStateToProps,
	{ setArchetypes, setSelected }
)(Wheel);
