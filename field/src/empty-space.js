import Field from './field';

export default class EmptySpace extends Field {
	constructor(name, options = {
		width: 1,
	}) {
		super(name, "empty-space", options);
	}
}
