// @flow

type F = {
	text: Function,
}

const test = <T>(param: T): T => param

describe('type', () => {
	it('function', () => {
		const f = test(2)
	})
})
