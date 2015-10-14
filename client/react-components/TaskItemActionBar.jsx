TaskItemActionBar = React.createClass({
	iconClickHandler() {
		Meteor.call('changeTaskStatus', this.props.taskID, event.target.dataset.status, (error) => {
			if (error) {
				console.error(error);
				return;
			}

			// Code below is needed so the status icon doesn't flip to another
			// status right after the user updates it
			const flipper = React.findDOMNode(this.refs.flipper);

			flipper.classList.add('stop');
			flipper.addEventListener('mouseleave', function removeStopClass() {
				flipper.classList.remove('stop');
				flipper.removeEventListener('mouseleave', removeStopClass);
			});
		});
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
			<div className="flip-container left circle">
				<div className="flipper" ref="flipper">
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