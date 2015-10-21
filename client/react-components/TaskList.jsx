TaskList = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
		return {
			tasks: Task.find().fetch()
		}
	},

	componentDidUpdate() {
		this.tooltipInitializer.runAttacher();
		this.taskItemMenuInitializer.runAttacher();
	},

	componentWillUnmount() {
		this.tooltipInitializer.runDetacher();
		this.taskItemMenuInitializer.runDetacher();
	},

	tooltipInitializer: new PluginInitializer(
		(elements) => { $(elements).tooltip({delay: 25}) },
		(elements) => { $(elements).tooltip('remove') }
	),

	taskItemMenuInitializer: new PluginInitializer(
		(elements) => $(elements).dropdown({
			hover: false,
			constrain_width: false
		})
	),

	render() {
		return (
			<div id="TaskList" className="container box z-depth-3">
				<ul className="collection">
					{
						this.data.tasks.map((task) =>
							<TaskItem
								key={task._id}
								task={task}
								tooltipInitializer={this.tooltipInitializer}
								taskItemMenuInitializer={this.taskItemMenuInitializer} />
					)}
				</ul>
			</div>
		)
	}
})