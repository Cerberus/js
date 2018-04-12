import { myFun, tError } from '..'

describe('feature 1', () => {
	it('myFun', () => {
		expect(myFun(3)).toBe(9)
	})

	it('throw', () => {
		expect(tError).toThrow()
	})
})
