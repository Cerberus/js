// @flow

const sum = (x, y) => x.toString() + y.toString()

const addTwo = sum.bind(null, 2)

const plusTwo = x => sum(x, 2)

describe('general', () => {
	it('basic', () => {
		addTwo(3) // ?
		plusTwo(4) // ?
		'ab'.replace(/[ab]/, '') // ?
	})
})
