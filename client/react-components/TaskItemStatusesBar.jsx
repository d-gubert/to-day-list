TaskItemStatusesBar = React.createClass({
	propTypes: {},
	flipIconInstance: null,

	getActionBar() {
		return React.findDOMNode(this.refs.actionBar);
	},

	handleMouseLeave() {
		event.target.classList.remove('action-bar-hover');
	},

	handleStatusClick() {
		Meteor.call('changeTaskStatus', this.props.task_id, event.target.dataset.status, (error) => {
			if (error) {
				console.error(error);
				return;
			}

			// Code below is needed so the status icon doesn't flip to another
			// status right after the user updates it
			this.preventIconFlipUntilMouseLeave();
		});
	},

	preventIconFlipUntilMouseLeave() {
		console.log(this.flipIconInstance);

		if (!this.flipIconInstance.refs || !this.flipIconInstance.refs.flipper) return;

		const flipper = React.findDOMNode(this.flipIconInstance.refs.flipper);

		flipper.classList.add('stop');
		this.getActionBar().addEventListener('mouseleave', function removeStopClass() {
			flipper.classList.remove('stop');
			flipper.removeEventListener('mouseleave', removeStopClass);
		});
	},

	renderStatusesIcons() {
		let statuses  = [];
		const classes = "fa left circle status-icon ";

		let left = 0;

		for (let status in TaskItem.statusIconMap) {
			if ((this.props.task_status === TASK_STATUS.DONE && status === TASK_STATUS.NEW) ||
				 status === TASK_STATUS.DONE || status === this.props.task_status) {
				continue;
			}

			statuses.push(
				<i key={this.props.task_id + status}
				   onClick={this.handleStatusClick}
				   className={classes + TaskItem.statusIconMap[status]}
				   data-status={status}
				   data-left={(left+=40) + 'px'}
				   style={{left: (left+=40) + 'px'}} />
			)
		}

		return statuses;
	},

	render() {
		return (
			<div className="action-bar" ref="actionBar" onMouseLeave={this.handleMouseLeave}>
				<TaskItemFlipIcon
					status={this.props.task_status}
					task_id={this.props.task_id}
					getActionBar={this.getActionBar}
					ref={(instance) => this.flipIconInstance = instance}
					handleStatusClick={this.handleStatusClick} />
				{this.renderStatusesIcons()}
			</div>
		)
	}
});