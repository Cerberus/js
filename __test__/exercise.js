// // @flow
// // reactive programming '1122' => 3
//
// describe('index', () => {
// 	const fn: string => number = (str: string) =>
// 		str
// 			.concat(str[0])
// 			.split('')
// 			.map(x => parseInt(x))
// 			.filter((x, index, all) => x === all[index + 1])
// 			.reduce((acc, x) => acc + x, 0)
//
// 	it('basic', () => {
// 		expect(fn('1122')).toEqual(3)
// 	})
// })
