import React, { Component } from 'react';
import './style.css';
import 'antd/dist/antd.css';
import store from './store';
import {
	getInputAction,
	getAddTodoItemAction,
	getdelItemAction,
	getInitList,
} from './store/actionCreator';
import TodoListUi from './TodoListUi';
class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = store.getState();
		console.log(store.getState());
		this.handleChange = this.handleChange.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleDel = this.handleDel.bind(this);
		store.subscribe(this.handleStoreChange);
	}
	render() {
		return (
			<TodoListUi
				inputValue={this.state.inputValue}
				list={this.state.list}
				handleChange={this.handleChange}
				handleBtnClick={this.handleBtnClick}
				handleDel={this.handleDel}
			/>
		);
	}

	componentDidMount() {
		store.dispatch(getInitList());
	}

	handleChange(e) {
		const action = getInputAction(e.target.value);
		store.dispatch(action);
	}
	handleStoreChange() {
		this.setState(store.getState());
	}
	handleBtnClick() {
		const action = getAddTodoItemAction();
		store.dispatch(action);
	}
	handleDel(index) {
		const action = getdelItemAction();
		store.dispatch(action);
	}
}

export default TodoList;
