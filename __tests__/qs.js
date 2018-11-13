// @flow

import qs from 'qs'
import merge from 'lodash.merge'

describe('qs', () => {
	it('stringify', () => {
		const params = { test: 'กข' }
		qs.stringify(params, {
			arrayFormat: 'repeat',
		}) // ?
	})
	it('parse', () => {
		const url = "romotions?regionId=9681".split('?')[1]
		qs.parse(url, { ignoreQueryPrefix: true }) // ?
	})
})
