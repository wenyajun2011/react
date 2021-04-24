import styled from 'styled-components';
import logoPic from '../../statics/nav-logo-4c7bbafe27adc892f3046e6978459bac.png';

export const HeaderWrapper = styled.div`
	height: 58px;
	border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.a`
	position: absolute;
	top: 6px;
	left: 0;
	display: block;
	width: 100px;
	height: 59px;
	background: url(${logoPic});
	background-size: contain;
`;
export const Nav = styled.div`
	width: 960px;
	height: 100%;
	padding-right: 70px;
	box-sizing: border-box;
	margin: 0 auto;
`;
export const NavItem = styled.div`
	line-height: 56px;
	font-size: 17px;
	padding: 0 15px;
	color: #333;
	&.left {
		float: left;
	}
	&.right {
		float: right;
		color: #969696;
	}
	&.active {
		color: #ea6f5a;
	}
`;
export const NavSearch = styled.input.attrs({
	placeholder: '搜索',
})`
	width: 160px;
	height: 38px;
	padding: 0 20px;
	box-sizing: border-box;
	border: none;
	outline: none;
	border-radius: 19px;
	margin-top: 9px;
	background: #eee;
	font-size: 14px;
	margin-left: 20px;
	&::placeholder {
		color: #999;
	}
`;
export const Addition = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	height: 56px;
`;
export const Button = styled.div`
	float: right;
	margin-top: 9px;
	line-height: 38px;
	border-radius: 19px;
	border: 1px solid #ec6149;
	margin-right: 20px;
	padding: 0 20px;
	font-size: 14px;
	&.reg {
		color: #ec6149;
	}
	&.writting {
		color: #fff;
		background: #ec6149;
	}
`;
