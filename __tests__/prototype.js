// @flow

type Pet = {
	sound: string,
	bark: Function,
	__proto__: any,
}

const dog = {
	sound: 'woof',
	bark() {
		return this.sound
	},
}

describe('prototype', () => {
	it('general', () => {
		// $FlowFixMe
		const cat: Pet = { sound: 'meaw' }
		cat.__proto__ = dog
		cat.bark()
	})
})
