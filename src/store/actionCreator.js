import {
	CHANGE_INPUT_VALUE,
	ADD_TODO_ITEM,
	DELETE_TODO_ITEM,
	INIT_DATA,
	GET_INIT_LIST,
	GET_SAGA,
} from './actionTypes';

export const getInputAction = value => ({
	type: CHANGE_INPUT_VALUE,
	value,
});
export const getAddTodoItemAction = () => ({
	type: ADD_TODO_ITEM,
});
export const getdelItemAction = index => ({
	type: DELETE_TODO_ITEM,
	index,
});
export const getInitDataAction = data => ({
	type: INIT_DATA,
	data,
});
export const getInitList = () => ({
	type: GET_INIT_LIST,
});
export const getSafa = data => ({
	type: GET_SAGA,
	data,
});

// export const getTodoList = () => {
// 	return dispatch => {
// 		axios.get('/api/todolist.json').then(res => {
// 			console.log(res.data.data);
// 			const action = getInitDataAction(res.data.data);
// 			dispatch(action);
// 		});
// 	};
// };
