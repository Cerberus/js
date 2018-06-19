// @flow

const fn = ({ k1 = 'd1', k2 = 'd2' }: any = {}) => ({ k1, k2 })

describe('general', () => {
	it('default fn', () => {
		fn() // ?
		fn({}) // ?
		fn({ k1: 'v1' }) // ?
	})

	it('index', () => {

	})
})
