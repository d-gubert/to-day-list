Meteor.methods
	addTask: (formData) ->
		#Add Validation
		Task.insert
			title: formData.title
			date_created: new Date
			status: TASK_STATUS.NEW

	changeTaskStatus: (taskID, status) ->
		Task.update { _id: taskID }, { $set: status: status }