import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header/index';
import { IconfontStyle } from './statics/iconfont/iconfont';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import store from './store';
class App extends Component {
	render() {
		return (
			<div className="App">
				<Provider store={store}>
					<IconfontStyle />
					<BrowserRouter>
						<Header />
						<Route path="/" exact component={Home}></Route>
						<Route path="/login" exact component={Login}></Route>
						<Route path="/detail/:id" exact component={Detail}></Route>
					</BrowserRouter>
				</Provider>
			</div>
		);
	}
}

export default App;
