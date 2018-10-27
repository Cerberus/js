function* gen(list) {
	yield list[0]
	yield list[1]
}

describe('generator', () => {
	const list = [...Array(4)].map((_, index) => index)
	it('basic', () => {
		const g1 = gen(list)
		g1.next() //?
		g1.next() //?
		g1.next() //?
	})
})
