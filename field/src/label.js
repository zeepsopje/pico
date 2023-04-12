import Field from './field';

export default class Label extends Field {
	constructor(name, options = {
		width: 4,
	}) {
		super(name, "label", options);
	}
}
