import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button } from './style';
import { IconfontStyle } from '../../statics/iconfont/iconfont';
class Header extends Component {
	render() {
		return (
			<div>
				<IconfontStyle />
				<HeaderWrapper>
					<Logo href="/" />
					<Nav>
						<NavItem className="left active">首页</NavItem>
						<NavItem className="left">下载</NavItem>
						<NavItem className="right">登录</NavItem>
						<NavItem className="right">
							<span className="iconfont">&#xe601;</span>
						</NavItem>
						<NavSearch></NavSearch>
					</Nav>
					<Addition>
						<Button className="writting">写文章</Button>
						<Button className="reg">注册</Button>
					</Addition>
				</HeaderWrapper>
			</div>
		);
	}
}

export default Header;
