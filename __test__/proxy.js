// @flow

const hanlder = {
	get: (obj, key) => {
		obj // ?
		return 0
	}
}

const p = new Proxy({}, hanlder)

describe('proxy', () => {
	it('basic', () => {
		p['1'] // ?
	})
})
