// @flow

import { Map, List, fromJS, Record } from 'immutable'

type MyList = List<Map<string, number>>

describe('immutable', () => {
	it('list', () => {
		const list: MyList = List([Map({ key: 1 }), Map({ key: 2 })])
		const list2: MyList = List([Map({ key: 1 }), Map({ key: 3 })])
		list.get(1).get('123') // ?
		const list3 = list.concat(list2) // ?
		list3.toSet().toList()
		for (const item of list3) {
			List(item) // ?
		}
	})
	it('map', () => {
		const map = Map({ key: Map({ a: 123 }) })
	})

	it('formJS', () => {
		const foo = fromJS({ params: JSON.stringify({ regionId: 1 }), test: [] }) // ?
		Map().get('123', 123) // ?
		foo.get('test') // ?
	})
	it('record', () => {
		const NewRe = Record<{ abc: number }>({ abc: 123 })
		const r = NewRe({ abc: 124 })
		r.abc
	})
})
