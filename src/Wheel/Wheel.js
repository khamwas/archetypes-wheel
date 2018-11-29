import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setArchetypes, setSelected } from '../redux/reducer';

class Wheel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			primary: {},
			secondary: {},
			link: {},
			step: 0
		};
	}

	componentDidMount() {
		this.props.setArchetypes();
	}

	handleStep(direction) {
		if (direction === 'increase') {
			this.setState({ step: this.state.step + 1 });
		} else if (direction === 'decrease') {
			this.setState({ step: this.state.step - 1 });
		}
	}

	render() {
		// let outerWheel = this.props.archetypes.map((elem) => (
		// 	<div key={elem.archetype_id}>
		// 		<h1>{elem.name.toUpperCase()}</h1>
		// 		<p>Alias: {elem.alias}</p>
		// 		<h4>Drive: {elem.drive}</h4>
		// 		<h4>Method: {elem.method}</h4>
		// 		<h4>Shadow: {elem.shadow}</h4>
		// 		<h4>Aspect: {elem.aspect}</h4>
		// 		<h4>Role: {elem.role}</h4>
		// 	</div>
		// ));
		let outerWheel = this.props.archetypes.map((elem) => (
			<h1 key={elem.archetype_id}>{elem.name.toUpperCase()}</h1>
		));
		let innerWheel = this.props.archetypes
			.slice(this.state.step)
			.concat(this.props.archetypes.slice(0, this.state.step))
			.map((elem) => (
				<h1 key={elem.archetype_id}>{elem.name.toUpperCase()}</h1>
			));
		return (
			<div>
				<div className="App">
					<div>{outerWheel}</div>
					<div>{innerWheel}</div>
				</div>
				<button onClick={() => this.handleStep('increase')}>
					step forward
				</button>
				<button onClick={() => this.handleStep('decrease')}>
					step backward
				</button>
			</div>
		);
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
