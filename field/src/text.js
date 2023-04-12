import Field from './field';

export default class Text extends Field {
	constructor(name, options = {
		width: 4,
	}) {
		super(name, "text", options);
	}
}
