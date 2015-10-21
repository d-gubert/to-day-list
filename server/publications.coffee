Meteor.publish 'tasks', ->
	return Task.find status: $ne: TASK_STATUS.DELETED,
		fields:
			statusHistory: 0

Meteor.publish 'taskWithStatusHistory', (task_id) ->
	check task_id, String

	return Task.find _id: task_id,
		fields: statusHistory: 1