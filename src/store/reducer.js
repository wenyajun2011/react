import {
	CHANGE_INPUT_VALUE,
	ADD_TODO_ITEM,
	DELETE_TODO_ITEM,
	INIT_DATA,
	GET_SAGA,
} from './actionTypes';
const defaultState = {
	inputValue: '',
	list: [],
};
//eslint-disable-next-line
export default (state = defaultState, action) => {
	if (action.type === CHANGE_INPUT_VALUE) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value;
		return newState;
	}
	if (action.type === ADD_TODO_ITEM) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(newState.inputValue);
		newState.inputValue = '';
		return newState;
	}
	if (action.type === DELETE_TODO_ITEM) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index, 1);
		return newState;
	}
	if (action.type === INIT_DATA) {
		const newState = JSON.parse(JSON.stringify(state));
		console.log(action.data);
		newState.list = action.data;
		return newState;
	}
	if (action.type === GET_SAGA) {
		const newState = JSON.parse(JSON.stringify(state));
		console.log(action);
		newState.list = action.data;
		return newState;
	}
	return state;
};