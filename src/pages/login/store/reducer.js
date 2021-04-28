import { fromJS } from 'immutable';
//import { contants } from '../store';
const defaultState = fromJS({
	login: false,
});

//eslint-disable-next-line
export default (state = defaultState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
