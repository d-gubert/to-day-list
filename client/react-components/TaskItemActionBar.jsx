TaskItemActionBar = React.createClass({
	statusIconMap: {},
	statusBackgroundColorMap: {},

	iconClickHandler() {
		Meteor.call('changeTaskStatus', this.props.taskID, event.target.dataset.status);
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

		let backIconClasses = "fa circle ", backIconStatus = ''

		if (this.props.status === TASK_STATUS.DONE) {
			backIconClasses += this.statusIconMap[TASK_STATUS.NEW];
			backIconStatus = TASK_STATUS.NEW;
		} else {
			backIconClasses += this.statusIconMap[TASK_STATUS.DONE];
			backIconStatus = TASK_STATUS.DONE;
		}

		return (
			<div className="flip-container left circle">
				<div className="flipper">
					<div className="front">
						<i className={frontIconClasses} />
					</div>
					<div className="back">
						<i className={backIconClasses} data-status={backIconStatus} onClick={this.iconClickHandler} />
					</div>
				</div>
			</div>
		)
	}
})