TaskItemActionBar = React.createClass({
	statusIconMap: {},
	statusBackgroundColorMap: {},

	doneIconClickHandler() {
		if (this.props.status !== TASK_STATUS.DONE)
			Meteor.call('markTaskAsDone', this.props.taskID)
	},

	componentWillMount() {
		// TASK_STATUS isn't available at definition time, so we gotta wait
		// until just before the component renders
		this.statusIconMap = {
			[TASK_STATUS.NEW]: 'fa-sun-o yellow',
			[TASK_STATUS.DONE]: 'fa-check green'
		};
	},

	render() {
		const frontIconClasses = "fa circle " + this.statusIconMap[this.props.status];

		let backIconClasses = "fa circle "

		if (this.props.status === TASK_STATUS.DONE)
			backIconClasses += this.statusIconMap[TASK_STATUS.NEW]
		else
			backIconClasses += this.statusIconMap[TASK_STATUS.DONE]

		return (
			<div className="flip-container left circle">
				<div className="flipper">
					<div className="front">
						<i className={frontIconClasses} />
					</div>
					<div className="back">
						<i className={backIconClasses} onClick={this.doneIconClickHandler} />
					</div>
				</div>
			</div>
		)
	}
})