// @flow

type P = {
	text: string,
}

type F = {
	text: Function,
}

const test = <T>(p: T): T => p

const obj = {}

describe('general', () => {
	it('index', () => {
		const p: P = { text: 'test' }
		const f = test(2)
	})
})
