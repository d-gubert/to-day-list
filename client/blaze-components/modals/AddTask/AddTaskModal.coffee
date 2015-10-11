spinnerHTML = '
	<div class="preloader-wrapper small active">
		<div class="spinner-layer spinner-green-only">
			<div class="circle-clipper left">
				<div class="circle"></div>
			</div>
			<div class="gap-patch">
				<div class="circle"></div>
			</div>
			<div class="circle-clipper right">
				<div class="circle"></div>
			</div>
		</div>
	</div>
'

Template.AddTaskModal.events
	'submit form, click .save': (e, instance) ->
		e.preventDefault()

		if instance.find('.save.disabled')? then return

		form = instance.find 'form'

		formData = parseFormToObject form

		if _.isEmpty formData.title
			instance.$('#task-title').addClass 'invalid'
			return
		else
			instance.$('#task-title').removeClass 'invalid'

		instance.$('.modal-footer a')
					.addClass('disabled')
					.removeClass('modal-close')
					.filter('.save')
					.html spinnerHTML

		Meteor.call 'addTask', formData

		instance.$('.modal-footer a')
					.removeClass('disabled')
					.filter('.save')
					.html('Save')
					.end()
					.filter('.cancel')
					.addClass('modal-close')

		instance.$('#AddTaskModal').closeModal()
		form.reset()

