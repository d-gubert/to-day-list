@parseFormToObject = (formObject) ->
	formFields = {}

	$(formObject).serializeArray().forEach (field) ->
		if formFields[field.name]?
			formFields[field.name] = [formFields[field.name]] if not formFields[field.name] instanceof Array
			formFields[field.name].push field.value
		else
			formFields[field.name] = field.value

	return formFields