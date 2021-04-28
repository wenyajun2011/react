import axios from 'axios';
import { contants } from '../store';

const changeDetail = (title, content) => ({
	type: contants.GET_DETAIL,
	title,
	content,
});

export const getDetail = id => {
	return dispatch => {
		axios.get('/api/detail.json?id=' + id).then(res => {
			const result = res.data.data;
			dispatch(changeDetail(result.title, result.content));
		});
	};
};
