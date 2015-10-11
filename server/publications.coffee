Meteor.publish 'tasks', ->
	return Task.find();