import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setArchetypes, setSelected } from './redux/reducer';
import { Provider } from 'react-redux';
import store from './redux/store';
import Wheel from './Wheel/Wheel';
import './App.css';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Wheel />
			</Provider>
		);
	}
}

export default App;
