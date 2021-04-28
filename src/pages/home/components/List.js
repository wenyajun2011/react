import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, LoadMore } from '../style';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';
class List extends PureComponent {
	render() {
		const { articleList, getMoreList } = this.props;
		return (
			<div>
				{articleList.map(item => {
					return (
						<Link key={item.get('id')} to={'/detail/' + item.get('id')}>
							<ListItem>
								<img className="pic" src={item.get('imgUrl')} alt="" />
								<ListInfo>
									<h3 className="title">{item.get('title')}</h3>
									<p className="desc">{item.get('desc')}</p>
								</ListInfo>
							</ListItem>
						</Link>
					);
				})}
				<LoadMore onClick={getMoreList}>更多文字</LoadMore>
			</div>
		);
	}
}
const mapState = state => ({
	articleList: state.getIn(['home', 'articleList']),
});
const mapDispatch = dispatch => ({
	getMoreList() {
		dispatch(actionCreators.getMoreList());
	},
});

export default connect(mapState, mapDispatch)(List);
