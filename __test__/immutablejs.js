// // @flow
//
// import Immutable, { Map, List, fromJS } from 'immutable'
//
// describe('immutable', () => {
// 	it('list', () => {
// 		const list = List([Map({ key: 1 }), Map({ key: 2 }), Map({ key: 3 })])
// 		const list2 = List([Map({ key: 1 }), Map({ key: 3 })])
// 		const list3 = list.concat(list2) // ?
// 		list3.toSet().toList() // ?
// 	})
// 	it('map', () => {
// 		const map = new Map({ key: 'test' })
// 		map.set('key', undefined) // ?
// 	})
//
// 	it('formJS', () => {
// 		fromJS({ params: JSON.stringify({ regionId: 1 }) }) // ?
// 	})
// })
