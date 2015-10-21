TaskItem = React.createClass({
	statics: {
		statusIconMap: {
			[TASK_STATUS.NEW]: 'fa-sun-o yellow',
			[TASK_STATUS.DONE]: 'fa-check green',
			[TASK_STATUS.PROGRESS]: 'fa-hourglass-half orange',
			[TASK_STATUS.WONT]: 'fa-thumbs-o-down grey',
			[TASK_STATUS.WAIT]: 'fa-clock-o blue'
		},

		statusBackgroundColorMap: {
			[TASK_STATUS.NEW]: 'yellow lighten-4',
			[TASK_STATUS.DONE]: 'green lighten-4',
			[TASK_STATUS.PROGRESS]: 'orange lighten-4',
			[TASK_STATUS.WONT]: 'grey lighten-2',
			[TASK_STATUS.WAIT]: 'blue lighten-4'
		},
	},

	propTypes: {
		task: React.PropTypes.object.isRequired,
		tooltipInitializer: React.PropTypes.instanceOf(PluginInitializer).isRequired,
		taskItemMenuInitializer: React.PropTypes.instanceOf(PluginInitializer).isRequired,
	},

	componentDidMount() {
		const taskTitleEl = React.findDOMNode(this.refs.taskTitle);

		if (taskTitleEl.scrollWidth > taskTitleEl.clientWidth) {
			this.props.tooltipInitializer.addElement(taskTitleEl);
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
				<TaskItemMenu task={this.props.task} taskItemMenuInitializer={this.props.taskItemMenuInitializer} />
			</li>
		)
	}
})