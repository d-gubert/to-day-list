TaskItem = React.createClass({
	statics: {
		statusIconMap: {
			[TASK_STATUS.NEW]: 'fa-sun-o yellow',
			[TASK_STATUS.DONE]: 'fa-check green',
			[TASK_STATUS.WONT]: 'fa-thumbs-o-down grey',
			[TASK_STATUS.WAIT]: 'fa-clock-o blue'
		},

		statusBackgroundColorMap: {
			[TASK_STATUS.NEW]: 'yellow lighten-4',
			[TASK_STATUS.DONE]: 'green lighten-4',
			[TASK_STATUS.WONT]: 'grey lighten-4',
			[TASK_STATUS.WAIT]: 'blue lighten-4'
		},
	},

	propTypes: {
		task: React.PropTypes.object.isRequired,
		tooltipManager: React.PropTypes.instanceOf(MaterializeTooltipManager).isRequired
	},

	componentDidMount() {
		const taskTitleEl = React.findDOMNode(this.refs.taskTitle);

		if (taskTitleEl.scrollWidth > taskTitleEl.clientWidth) {
			this.props.tooltipManager.addElement(taskTitleEl);
		}
	},

	render() {
		const taskItemClasses = "task-item collection-item avatar cursor-pointer " +
								this.props.task.status + " " +
								TaskItem.statusBackgroundColorMap[this.props.task.status]
		return (
			<li className={taskItemClasses}>
				<TaskItemStatusesBar task_status={this.props.task.status} task_id={this.props.task._id} />
				<div ref="taskTitle" className="large left truncate task-title" data-tooltip={this.props.task.title}>
					{this.props.task.title}
				</div>
				<a href="#!" className="secondary-content"><i className="fa fa-send" /></a>
			</li>
		)
	}
})