Template.FixedButtons.onRendered ->
	this.$('#AddButton').leanModal
		ready: ->
			Template.AddTaskModal.getInstance().find('input').focus()