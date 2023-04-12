export default class Field {
	constructor(name, type, options = {}) {
		this.name = name;
		this.type = type;
		this.value = null;
		this.options = options;
	}
}
