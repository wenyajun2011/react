import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import { getSafa } from './actionCreator';
import axios from 'axios';

function* getList() {
	try {
		const res = yield axios.get('/api/todolist.json');
		yield put(getSafa(res.data.data));
	} catch (error) {
		console.log(error);
	}
}

function* mySaga() {
	yield takeEvery(GET_INIT_LIST, getList);
}

export default mySaga;
