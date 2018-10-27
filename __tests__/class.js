// @flow

class Test {
	store: {| me: string |}
	init(store) {
		this.store = store
	}
	getStore() {
		return this.store
	}
}

describe('class', () => {
	it('index', () => {
		const store = { me: 'me' }
		const test = new Test()
		test.init(store)
		test.getStore() // ?
	})
})
