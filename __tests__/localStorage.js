// @flow

// mock
const localStorage: { [string]: Function } = {
	getItem: () => {},
	setItem: () => {},
	removeItem: () => {},
}

const handler = {
	get(obj, key) {
		return obj[key]
	},
	set(obj, keyValue, value) {
		const { key, ...rest } = obj
		const newObj = { ...rest, [keyValue]: value }
		localStorage.setItem(key, newObj)
		return Reflect.set(...arguments)
	},
	deleteProperty(obj, keyValue) {
		delete obj[keyValue]
		const { key, ...rest } = obj
		localStorage.setItem(key, rest)
		return Reflect.set(...arguments)
	},
}

const initial = (key: string) => {
	const obj = localStorage.getItem(key)
	return new Proxy({ ...obj, key }, handler)
}

type Obj<T> = {
	value: T,
}

type Token = '1' | '2'

const token: Obj<Token> = initial('token')

describe('localStorage', () => {
	it('proxy', () => {
		token.value = '1' // ?
		token // ?
		token.value // ?
		delete token.value
		token.value // ?
	})
})
