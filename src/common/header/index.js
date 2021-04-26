import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	Addition,
	Button,
	SearchWrapper,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoItem,
	SearchInfoList,
} from './style';

class Header extends Component {
	getListArea() {
		const { focused, list, page, handleMouseEnter } = this.props;
		const newList = list.toJS();
		const pageList = [];
		for (let index = (page - 1) * 10; index < page * 10; index++) {
			pageList.push(<SearchInfoItem key={index}>{newList[index]}</SearchInfoItem>);
		}

		if (focused) {
			return (
				<SearchInfo onMouseEnter={handleMouseEnter}>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch>换一批</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>{pageList}</SearchInfoList>
				</SearchInfo>
			);
		} else {
			return null;
		}
	}
	render() {
		const { focused, handleInputFocus, handleInputBlur } = this.props;
		return (
			<div>
				<HeaderWrapper>
					<Logo href="/" />
					<Nav>
						<NavItem className="left active">首页</NavItem>
						<NavItem className="left">下载</NavItem>
						<NavItem className="right">登录</NavItem>
						<NavItem className="right">
							<span className="iconfont">&#xe601;</span>
						</NavItem>
						<SearchWrapper>
							<CSSTransition in={focused} timeout={300} classNames="slide">
								<NavSearch
									className={focused ? 'focused' : ''}
									onFocus={handleInputFocus}
									onBlur={handleInputBlur}
								></NavSearch>
							</CSSTransition>
							<span className={focused ? 'iconfont focused' : 'iconfont'}>
								&#xe600;
							</span>
							{this.getListArea()}
						</SearchWrapper>
					</Nav>
					<Addition>
						<Button className="writting">
							<span className="iconfont">&#xe603;</span>
							写文章
						</Button>
						<Button className="reg">注册</Button>
					</Addition>
				</HeaderWrapper>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		focused: state.getIn(['header', 'focused']),
		list: state.getIn(['header', 'list']),
		page: state.getIn(['header', 'page']),
	};
};
const mapDispatchToprops = dispatch => {
	return {
		handleInputFocus() {
			dispatch(actionCreators.getList());
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		},
		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter());
		},
	};
};
export default connect(mapStateToProps, mapDispatchToprops)(Header);
