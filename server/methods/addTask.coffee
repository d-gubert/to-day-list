Meteor.methods
	addTask: (formData) ->
		#Add Validation
		Task.insert
			title: formData.title
			date_created: new Date