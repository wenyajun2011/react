import { constants } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	focused: false,
	list: [],
	page: 1,
	totalPage: 1,
	mouseIn: false,
});
//eslint-disable-next-line
export default (state = defaultState, action) => {
	switch (action.type) {
		case constants.SEARCH_FOCUS:
			return state.set('focused', true);
		case constants.SEARCH_BLUR:
			return state.set('focused', false);
		case constants.CHANGE_LIST:
			return state.set('list', action.data).set('totalPage', action.totalPage);
		case constants.MOUSE_ENTER:
			return state.set('mouseIn', true);
		default:
			return state;
	}
};