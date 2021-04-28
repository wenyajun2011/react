import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style';
class Login extends PureComponent {
	render() {
		console.log(this.props);
		return (
			<LoginWrapper>
				<LoginBox>
					<form>
						<Input
							autocomplete="off"
							placeholder="账号"
							innerRef={input => {
								this.account = input;
							}}
						/>
						<Input
							autocomplete="off"
							placeholder="密码"
							type="password"
							innerRef={input => {
								this.password = input;
							}}
						/>
					</form>

					<Button onClick={() => this.props.login(this.account, this.password)}>
						登陆
					</Button>
				</LoginBox>
			</LoginWrapper>
		);
	}
	componentDidMount() {}
}

const mapDispatch = dispatch => ({
	login(accountElem, passwordElem) {
		console.log(accountElem);
	},
});
export default connect(null, mapDispatch)(Login);
