let elements = Symbol();

MaterializeTooltipManager = class MaterializeTooltipManager {
	constructor() {
		this[elements] = [];
	}

	addElement(element) {
		this[elements].push(element);
	}

	attachMaterializeTooltip() {
		$(this[elements]).tooltip({delay: 25});
	}

	detachMaterializeTooltip(element=null) {
		if (element === null)
			$(this[elements]).tooltip('remove');
		else
			$(element).tooltip('remove');
	}
}
