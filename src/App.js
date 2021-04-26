import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './common/header/index';
import { IconfontStyle } from './statics/iconfont/iconfont';
import store from './store';
class App extends Component {
	render() {
		return (
			<div className="App">
				<Provider store={store}>
					<IconfontStyle />
					<Header />
				</Provider>
			</div>
		);
	}
}

export default App;
