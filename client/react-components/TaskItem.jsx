TaskItem = React.createClass({
	render() {
		return (
			<li className="task-item collection-item avatar cursor-pointer">
				<i className="material-icons circle green">insert_chart</i>
				<span className="large title">{this.props.task.title}</span>
				<a href="#!" className="secondary-content"><i className="material-icons">send</i></a>
			</li>
		)
	}
})