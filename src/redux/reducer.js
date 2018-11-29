const axios = require('axios');
const SET_ARCHETYPES = 'SET_ARCHETYPES';
const SET_SELECTED = 'SET_SELECTED';

const initialState = {
	archetypes: [],
	selected: []
};

function reducer(state = initialState, action) {
	switch (action.type) {
		// case SET_GAMES:
		// 	return Object.assign({}, state, { games: action.payload });
		case `${SET_ARCHETYPES}_FULFILLED`:
			return Object.assign({}, state, { archetypes: action.payload });
		case SET_SELECTED:
			return Object.assign({}, state, { selected: action.payload });
		default:
			return state;
	}
}

export function setArchetypes() {
	return {
		type: SET_ARCHETYPES,
		payload: axios.get('/api/archetypes').then((response) => {
			return response.data;
		})
	};
}
export function setSelected(selected) {
	return {
		type: SET_SELECTED,
		payload: selected
	};
}

export default reducer;
