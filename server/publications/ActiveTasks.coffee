Meteor.publish 'ActiveTasks', ->
	return Tasks.find status: TASK_STATUS.ACTIVE