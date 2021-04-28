import { fromJS } from 'immutable';
import { contants } from '../store';
const defaultState = fromJS({
	title: '发现美句——村上春树',
	content: '13i325435435',
	imgUrl:
		'//upload-images.jianshu.io/upload_images/7006741-3ea633b33b42232d.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/960/format/webp',
});

//eslint-disable-next-line
export default (state = defaultState, action) => {
	switch (action.type) {
		case contants.GET_DETAIL:
			return state.merge({
				title: action.title,
				content: action.content,
			});
		default:
			return state;
	}
};
