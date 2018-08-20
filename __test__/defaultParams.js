// // @flow
//
// const fn = ({ k1 = 'd1', k2 = 'd2' }: any = {}) => ({ k1, k2 })
//
// const obj = {
// 	a: true,
// 	b: true,
// }
//
// describe('fu', () => {
// 	it('default fn', () => {
// 		fn() // ?
// 		fn({}) // ?
// 		fn({ k1: 'v1' }) // ?
// 	})
// })
