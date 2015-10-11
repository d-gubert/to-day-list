TaskList = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
		return {
			tasks: Task.find().fetch()
		}
	},

	render() {
		return (
			<div id="TaskList" className="container box z-depth-3">
				<ul className="collection">
					{this.data.tasks.map((task) => <TaskItem key={task._id} task={task} />)}
				</ul>
			</div>
		)
	}
})