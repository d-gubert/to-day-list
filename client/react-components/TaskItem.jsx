TaskItem = React.createClass({
	doneIconClickHandler() {
		if (this.props.task.status !== TASK_STATUS.DONE)
			Meteor.call('markTaskAsDone', this.props.task._id)
	},

	renderActionBar() {
		return (
			<div className="flip-container left circle">
				<div className="flipper">
					<div className="front">
						<i className="material-icons circle green">insert_chart</i>
					</div>
					<div className="back">
						<i className="material-icons circle grey" onClick={this.doneIconClickHandler}>done</i>
					</div>
				</div>
			</div>
		)
	},

	render() {
		const taskItemClasses = "task-item collection-item avatar cursor-pointer " +
								(this.props.task.status === TASK_STATUS.DONE ? 'done' : '')
		return (
			<li className={taskItemClasses}>
				{this.renderActionBar()}
				<span className="large title">{this.props.task.title}</span>
				<a href="#!" className="secondary-content"><i className="material-icons">send</i></a>
			</li>
		)
	}
})