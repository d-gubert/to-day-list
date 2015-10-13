TaskItem = React.createClass({
	propTypes: {
		task: React.PropTypes.object.isRequired,
		tooltipManager: React.PropTypes.instanceOf(MaterializeTooltipManager).isRequired
	},

	statusBackgroundColorMap: {},

	componentWillMount() {
		this.statusBackgroundColorMap = {
			[TASK_STATUS.NEW]: 'yellow lighten-4',
			[TASK_STATUS.DONE]: 'green lighten-4'
		}
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
								this.statusBackgroundColorMap[this.props.task.status]
		return (
			<li className={taskItemClasses}>
				<TaskItemActionBar status={this.props.task.status} taskID={this.props.task._id}/>
				<div ref="taskTitle" className="large left truncate task-title" data-tooltip={this.props.task.title}>
					{this.props.task.title}
				</div>
				<a href="#!" className="secondary-content"><i className="fa fa-send" /></a>
			</li>
		)
	}
})