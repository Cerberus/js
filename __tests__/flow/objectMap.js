// @flow

const obj = {
	b: num => num,
	c: num => num,
}

type Obj<Keys> = {
	[Keys]: (number) => number,
}

const obj2: Obj<$Keys<typeof obj>> = obj

obj2.b(123)
