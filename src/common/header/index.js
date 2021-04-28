import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';
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
		const {
			focused,
			list,
			page,
			mouseIn,
			handleMouseEnter,
			handleMouseLeave,
			handleOnchangePage,
			totalPage,
		} = this.props;
		const newList = list.toJS();
		const pageList = [];
		if (newList.length) {
			for (let index = (page - 1) * 10; index < page * 10; index++) {
				pageList.push(<SearchInfoItem key={index}>{newList[index]}</SearchInfoItem>);
			}
		}

		if (focused || mouseIn) {
			return (
				<SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch
							onClick={() => {
								handleOnchangePage(page, totalPage);
							}}
						>
							<span className="iconfont">&#xe851;</span> 换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>{pageList}</SearchInfoList>
				</SearchInfo>
			);
		} else {
			return null;
		}
	}
	render() {
		const { focused, handleInputFocus, handleInputBlur, list, login } = this.props;
		return (
			<div>
				<HeaderWrapper>
					<Link to="/">
						<Logo />
					</Link>

					<Nav>
						<NavItem className="left active">首页</NavItem>
						<NavItem className="left">下载</NavItem>
						{login ? (
							<NavItem className="right">退出</NavItem>
						) : (
							<Link to="/login">
								<NavItem className="right">登录</NavItem>
							</Link>
						)}

						<NavItem className="right">
							<span className="iconfont">&#xe601;</span>
						</NavItem>
						<SearchWrapper>
							<CSSTransition in={focused} timeout={300} classNames="slide">
								<NavSearch
									className={focused ? 'focused' : ''}
									onFocus={() => handleInputFocus(list)}
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
		totalPage: state.getIn(['header', 'totalPage']),
		mouseIn: state.getIn(['header', 'mouseIn']),
		login: state.getIn(['login', 'login']),
	};
};
const mapDispatchToprops = dispatch => {
	return {
		handleInputFocus(list) {
			list.size === 0 && dispatch(actionCreators.getList());
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		},
		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave());
		},
		handleOnchangePage(page, totalPage) {
			if (page < totalPage) {
				dispatch(actionCreators.changePage(page + 1));
			} else {
				dispatch(actionCreators.changePage(1));
			}
		},
	};
};
export default connect(mapStateToProps, mapDispatchToprops)(Header);
