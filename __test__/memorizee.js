// @flow
import memoizee from 'memoizee'

const fn = memoizee(
	(param: Object) => {
		console.log('1')
	},
	{ primitive: true },
)

const fn2 = memoizee((str: string) => {
	console.log(str)
})

describe('memorizee', () => {
	it('basic', () => {
		fn({ test: '123' }) // ?
		fn({ test: '123' }) // ?
	})
	it('native', () => {
		fn2(' test') // ?
		fn2('2') // ?
		fn2(' test') // ?
		fn2('2') // ?
	})
})
