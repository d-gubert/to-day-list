TaskList = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
		return {
			tasks: Task.find().fetch()
		}
	},

	render() {
		return (
			<div id="TaskList" className="highlight container box z-depth-3">
				<ul className="collection">
					{this.data.tasks.map((task) => {return <TaskItem key={task._id} task={task} />})}
				</ul>
			</div>
		)
	}
})