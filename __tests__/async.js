const fn1 = () => {
	return 1
}

describe('async', () => {
	it('basic', async () => {
		const result = await Promise.resolve(123)
		result
	})
})
