TaskItem = React.createClass({
	statusBackgroundColorMap: {},

	componentWillMount() {
		this.statusBackgroundColorMap = {
			[TASK_STATUS.NEW]: 'yellow lighten-4',
			[TASK_STATUS.DONE]: 'green lighten-4'
		}
	},

	render() {
		const taskItemClasses = "task-item collection-item avatar cursor-pointer " +
								this.props.task.status + " " +
								this.statusBackgroundColorMap[this.props.task.status]
		return (
			<li className={taskItemClasses}>
				<TaskItemActionBar status={this.props.task.status} taskID={this.props.task._id}/>
				<div className="large left task-title">{this.props.task.title}</div>
				<a href="#!" className="secondary-content"><i className="fa fa-send" /></a>
			</li>
		)
	}
})