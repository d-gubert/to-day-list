Template.TaskList.helpers
	task: ->
		return Tasks.find()

Template.TaskList.onCreated ->
	self = @
	self.autorun ->
		self.subscribe 'ActiveTasks'