// @flow

// https://medium.com/netscape/secret-flow-types-86b2ebb30951

type A = {
	type: 1,
	a: string,
}

type B = {
	type: 2,
	b: string,
}

type C = A | B

const fn = (p: C): void => {
	if (p.type === 1) {
		const obj = { ...p }
	}
}

const f1 = ({ type, b }: B) => `${type + b}`

f1({ type: 2, b: '123' })
