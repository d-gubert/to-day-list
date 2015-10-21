TaskItemMenu = React.createClass({
	propTypes: {
		task: React.PropTypes.object.isRequired,
		taskItemMenuInitializer: React.PropTypes.instanceOf(PluginInitializer).isRequired
	},

	handlerDeleteTask() {
		event.preventDefault();

		swal({
			title: "Are you sure?",
			text: "This task won't be available anymore!",
			showCancelButton: true,
			confirmButtonColor: "#DD6B55",
			confirmButtonText: "Yes, delete it!",
			closeOnConfirm: false
		}, () => {
			Meteor.call('deleteTask', this.props.task._id, (error) => {
				if (error) {
					console.error(error);
					return;
				}

				swal("Deleted!", "Task deleted", "success");
			})
		});
	},

	componentDidMount() {
		this.props.taskItemMenuInitializer.addElement(React.findDOMNode(this.refs.menuActivator));
	},

	render() {
		return (
			<a href="#" className="secondary-content" data-activates={"task" + this.props.task._id} ref="menuActivator">
				<i className="fa fa-ellipsis-v" />
				<ul id={"task" + this.props.task._id} className="dropdown-content">
					<li><a onClick={this.handlerDeleteTask} href="#"><i className="fa fa-trash-o" /> Delete Task</a></li>
				</ul>
			</a>
		)
	}
});