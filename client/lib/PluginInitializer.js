let elements = Symbol();
let callbacks = Symbol();

PluginInitializer = class PluginInitializer {
	constructor(attachCallback, detachCallback=null) {
		if (typeof attachCallback !== 'function')
			throw new Error('attachCallback must be a function!');

		if (detachCallback !== null && typeof detachCallback !== 'function')
			throw new Error('detachCallback must be a function!');

		this[callbacks] = {
			attachCallback, detachCallback
		};

		this[elements] = [];
	}

	set attachCallback(attachCallback) {
		if (typeof attachCallback !== 'function')
			throw new Error('attachCallback must be a function!')

		this[callbacks].attachCallback = attachCallback;
	}

	set detachCallback(detachCallback) {
		if (typeof detachCallback !== 'function')
			throw new Error('detachCallback must be a function!')

		this[callbacks].detachCallback = detachCallback;
	}

	addElement(element) {
		this[elements].push(element);
	}

	runAttacher() {
		this[callbacks].attachCallback(this[elements]);
	}

	runDetacher(element=null) {
		if (element === null)
			this[callbacks].detachCallback(this[elements]);
		else
			this[callbacks].detachCallback(element);
	}
}
