Meteor.startup ->
	Session.setDefault 'taskLimit', 5

	Tracker.autorun ->
		Meteor.subscribe 'tasks', Session.get 'taskLimit'