TaskListLoadMore = React.createClass({
	getInitialState() {
			return {
				enableLoadMore: true
			};
	},

	handleLoadMore() {
		Session.set('taskLimit', Session.get('taskLimit') + 5);
	},

	componentDidMount() {
		Tracker.autorun(() => {
			if (this.state.enableLoadMore && Counts.get('totalTasks') <= Session.get('taskLimit'))
				this.setState({enableLoadMore: false})
			else if (!this.state.enableLoadMore && Counts.get('totalTasks') > Session.get('taskLimit'))
				this.setState({enableLoadMore: true})
		});
	},

	render() {
		if (!this.state.enableLoadMore) return null;

		return (
			<li className="task-item collection-item cursor-pointer center">
				<a onClick={this.handleLoadMore} className="waves-effect waves-teal btn-flat">Load More</a>
			</li>
		)
	}
})