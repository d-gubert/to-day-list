Meteor.methods
	addTask: (formData) ->
		check formData.title, String

		Task.insert
			title: formData.title
			date_created: new Date
			status: TASK_STATUS.NEW

	changeTaskStatus: (taskID, status) ->
		check taskID, String
		check status, String

		Task.update _id: taskID,
			$set:
				status: status
				last_updated: new Date
			$push:
				statusHistory:
					status: status
					date: new Date

	deleteTask: (taskID) ->
		Meteor.call 'changeTaskStatus', taskID, TASK_STATUS.DELETED