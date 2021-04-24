import React, { Component } from 'react';
import propTypes from 'prop-types';
class TodoItem extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleClick = this.handleClick.bind(this);
	}
	render() {
		const { content } = this.props;
		return <li onClick={this.handleClick}>{content}</li>;
	}
	handleClick() {
		const { deleteItem, index } = this.props;
		deleteItem(index);
	}
}
TodoItem.propTypes = {
	content: propTypes.string,
	deleteItem: propTypes.func,
};
export default TodoItem;
