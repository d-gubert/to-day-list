Template.addGetInstanceMethod = ->
	currentInstance = Template.instance()
	if currentInstance?
		currentInstance.view.template.getInstance = (->
			return currentInstance
		).bind currentInstance
