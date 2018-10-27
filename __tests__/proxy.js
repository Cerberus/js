// @flow

const handler = {
	get: (obj, key) => {
		if (typeof obj[key] === 'object')
			return new Proxy(obj[key], handler)
		return obj[key]
	}
}

const p = new Proxy({ a: { b: 3 }}, handler)

describe('proxy', () => {
	it('basic', () => {
		p.a.b // ?
	})
})
