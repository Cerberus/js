// // @flow
//
// import moment from 'moment'
//
// const getRemainingDays = (isoStrDate: string): string => {
// 	if (!isoStrDate) return ''
// 	const today = moment().startOf('day')
// 	const expiryDay = moment(isoStrDate).startOf('day')
// 	const remainingDay = expiryDay.diff(today, 'days')
// 	if (remainingDay === 0) {
// 		return 'หมดอายุวันนี้'
// 	} else if (remainingDay > 0) {
// 		return `หมดอายุในอีก ${remainingDay+1} วัน`
// 	}
// 	return 'หมดอายุแล้ว'
// }
//
// describe('moment', () => {
// 	it('index', () => {
// 		// today is 06/08
// 		getRemainingDays('2018-08-05T23:59:59+07:00') // ?
// 		getRemainingDays('2018-08-06T23:59:59+07:00') // ?
// 		getRemainingDays('2018-08-07T23:59:59+07:00') // ?
// 	})
// 	it('test', () => {
// 		moment()
// 			.locale('th')
// 			.format('ll')
// 	})
// })
