// @flow

const sum = (x: number, y: number) => x + y

const closureTwo = (x) => sum(x, 2)

const patialTwo = sum.bind(this, 2)

describe('function', () => {
	it('index', () => {
		closureTwo(1) // ?
		patialTwo(1) // ?
	})
})
