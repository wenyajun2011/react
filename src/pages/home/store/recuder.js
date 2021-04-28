import { fromJS } from 'immutable';
import { contants } from '../store';
const defaultState = fromJS({
	topicList: [],
	articleList: [],
	recommendList: [],
	showScroll: false,
});

const changeHomeData = (state, action) => {
	return state.merge({
		topicList: fromJS(action.topicList),
		articleList: fromJS(action.articleList),
		recommendList: fromJS(action.recommendList),
	});
};

const addArticleList = (state, action) => {
	return state.set('articleList', state.get('articleList').concat(fromJS(action.list)));
};

const toggleScrollShow = (state, action) => {
	return state.set('showScroll', fromJS(action.show));
};

//eslint-disable-next-line
export default (state = defaultState, action) => {
	switch (action.type) {
		case contants.CHANGE_HOME_DATA:
			return changeHomeData(state, action);
		case contants.ADD_HOME_LIST:
			return addArticleList(state, action);
		case contants.TOGGLE_SCROLL_SHOW:
			return toggleScrollShow(state, action);
		default:
			return state;
	}
};
