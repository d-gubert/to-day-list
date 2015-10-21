Meteor.publish 'tasks', (limit) ->
	check limit, Number

	Counts.publish this, 'totalTasks', Task.find(status: $ne: TASK_STATUS.DELETED), noReady: true

	return Task.find status: $ne: TASK_STATUS.DELETED,
		limit: limit
		sort:
			date_created: -1
		fields:
			statusHistory: 0

Meteor.publish 'taskWithStatusHistory', (task_id) ->
	check task_id, String

	return Task.find _id: task_id,
		fields: statusHistory: 1