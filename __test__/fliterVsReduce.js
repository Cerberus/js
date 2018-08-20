// // @flow
//
// describe('array', () => {
// 	let arr
// 	beforeEach(() => {
// 		arr = [...Array(1000)].map((_, index) => index) // ?.
// 	})
//
// 	const updateItem = item => item + ''
//
// 	it('filter + map', () => {
// 		arr.filter(item => item % 2).map(item => {
// 			return updateItem(item)
// 		}) // ?$.length
// 	})
//
// 	it('reduce', () => {
// 		arr.reduce((acc, item) => {
// 			if (!(item % 2)) return acc
// 			acc.push(updateItem(item))
// 			return acc
// 		}, []) // ?$.length
// 	})
// })
