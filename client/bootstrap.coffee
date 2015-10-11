Meteor.startup ->
	Meteor.subscribe 'tasks'

	$(document).ready ->
		$('.modal-trigger').leanModal()