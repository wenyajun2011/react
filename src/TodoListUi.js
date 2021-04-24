import React, { Component, Fragment } from 'react';
import { Button, Input, List } from 'antd';

class TodoListUi extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<div style={{ marginTop: '10px' }}>
						<Input
							placeholder="Basic usage"
							value={this.props.inputValue}
							style={{ width: '300px', marginRight: '10px' }}
							onChange={this.props.handleChange}
						/>
						<Button type="primary" onClick={this.props.handleBtnClick}>
							提交
						</Button>
					</div>
					<List
						bordered
						dataSource={this.props.list}
						renderItem={(item, index) => (
							<List.Item
								onClick={() => {
									this.props.handleDel(index);
								}}
							>
								{item}
							</List.Item>
						)}
						style={{ width: '300px', marginTop: '10px' }}
					/>
				</div>
			</Fragment>
		);
	}
}

export default TodoListUi;
