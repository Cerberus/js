// @flow-deny

import qs from 'qs'
import merge from 'lodash.merge'

describe('qs', () => {
	it('stringify', () => {
		const params = { test: 'ก' }
		qs.stringify(params, {
			encode: true,
			arrayFormat: 'repeat',
		}) // ?
	})
	it('parse', () => {
		const url = "?test=true"
		qs.parse(url, { ignoreQueryPrefix: true }).test // ?
	})
})
