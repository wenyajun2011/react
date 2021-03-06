import React, { PureComponent } from 'react';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { connect } from 'react-redux';
import { actionCreators } from './store';
class Home extends PureComponent {
	handleScrollTop() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<div>
				<HomeWrapper>
					<HomeLeft>
						<img
							className="banner-img"
							src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
							alt=""
						/>
						<Topic />
						<List />
					</HomeLeft>
					<HomeRight>
						<Recommend />
						<Writer />
					</HomeRight>
					{this.props.showScroll ? (
						<BackTop onClick={this.handleScrollTop}>顶部</BackTop>
					) : null}
				</HomeWrapper>
			</div>
		);
	}
	componentDidMount() {
		this.props.changeHomeData();
		this.bindEvents();
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrollTopShow);
	}
	bindEvents() {
		window.addEventListener('scroll', this.props.changeScrollTopShow);
	}
}

const mapState = state => ({
	showScroll: state.getIn(['home', 'showScroll']),
});

const mapDiapatch = dispatch => ({
	changeHomeData() {
		dispatch(actionCreators.getHomeInfo());
	},
	changeScrollTopShow() {
		if (document.documentElement.scrollTop > 400) {
			dispatch(actionCreators.toggleTopShow(true));
		} else {
			dispatch(actionCreators.toggleTopShow(false));
		}
	},
});
export default connect(mapState, mapDiapatch)(Home);
