TaskItemFlipIcon = React.createClass({
	propTypes: {
		status: React.PropTypes.string.isRequired,
		task_id: React.PropTypes.string.isRequired,
		getActionBar: React.PropTypes.func.isRequired,
		handleStatusClick: React.PropTypes.func.isRequired
	},

	handleMouseEnter() {
		$('.action-bar-hover').removeClass('action-bar-hover');
		this.props.getActionBar().classList.add('action-bar-hover');
	},

	render() {
		const frontIconClasses = "fa circle " + TaskItem.statusIconMap[this.props.status];

		let backIconClasses = "fa circle ", backIconStatus = ''

		if (this.props.status === TASK_STATUS.DONE) {
			backIconClasses += TaskItem.statusIconMap[TASK_STATUS.NEW];
			backIconStatus = TASK_STATUS.NEW;
		} else {
			backIconClasses += TaskItem.statusIconMap[TASK_STATUS.DONE];
			backIconStatus = TASK_STATUS.DONE;
		}

		return (
			<div className="flip-container left circle status-icon" onMouseEnter={this.handleMouseEnter}>
				<div className="flipper" ref="flipper">
					<div className="front">
						<i className={frontIconClasses} />
					</div>
					<div className="back">
						<i className={backIconClasses} data-status={backIconStatus} onClick={this.props.handleStatusClick} />
					</div>
				</div>
			</div>
		)
	}
})