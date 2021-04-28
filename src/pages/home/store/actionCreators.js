import axios from 'axios';
import { contants } from '../store';
const changeHomeData = result => ({
	type: contants.CHANGE_HOME_DATA,
	topicList: result.topicList,
	articleList: result.articleList,
	recommendList: result.recommendList,
});
const addHomeList = list => ({
	type: contants.ADD_HOME_LIST,
	list,
});

export const getHomeInfo = () => {
	return dispatch => {
		axios.get('/api/home.json').then(res => {
			dispatch(changeHomeData(res.data.data));
		});
	};
};

export const getMoreList = () => {
	return dispatch => {
		axios.get('/api/homeList.json').then(res => {
			dispatch(addHomeList(res.data.data));
		});
	};
};

export const toggleTopShow = show => ({
	type: contants.TOGGLE_SCROLL_SHOW,
	show,
});
