const g = 0
const fn2 = () => {
	const b = 0
	console.log('fn2()')
}

const fn = () => {
	const a = 0
	console.log('fn()')
	fn2()
}

fn()
