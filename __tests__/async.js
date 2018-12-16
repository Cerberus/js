// @flow

const f = async (sec: number) => {
	console.log(sec)
	await new Promise(res => setTimeout(res, sec * 3))
	console.log(sec)
	return sec
}

const SECS = [ 2,3,1]

describe('async', () => {
	it('map', async () => {
		const result = await Promise.all(SECS.map(f))
		expect(result).toEqual(SECS)
	})

	const w = {
		FB: false,
	}

	let ready

	const Facebook = new Promise(res => (ready = res))

	it('async queue', () => {
		Facebook.then(FB => {
			FB
		})
		ready(w.FB)
	})
})
