TaskList = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
		return {
			tasks: Task.find().fetch()
		}
	},

	componentDidUpdate() {
		this.tooltipManager.attachMaterializeTooltip();
	},

	componentWillUnmount() {
		this.tooltipManager.detachMaterializeTooltip();
	},

	tooltipManager: new MaterializeTooltipManager(),

	render() {
		return (
			<div id="TaskList" className="container box z-depth-3">
				<ul className="collection">
					{this.data.tasks.map((task) => <TaskItem tooltipManager={this.tooltipManager} key={task._id} task={task} />)}
				</ul>
			</div>
		)
	}
})