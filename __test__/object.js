const test = {
	store: null,
	getStore: function() {
		return this.store
	},
}

describe('function', () => {
	it('index', () => {
		test.store = 'test'
		test.getStore() // ?
	})
})
