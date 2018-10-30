// @flow

const obj = { value: 124 }
const handlerObj = {
	get(obj, key) {
		return obj[key]
	},
}
const token = new Proxy(obj, handlerObj)

const sum = (x: number, y: number) => x + y
const handlerFn = {
	apply(target, thisArg, argumentsList) {
		return target(...argumentsList)
	},
}
const fn = new Proxy(sum, handlerFn)

describe('proxy', () => {
	it('constructor', () => {
		token
	})
	it('apply', () => {
		fn(1, 2)
	})
})
