// @flow

import Dataloader from 'dataloader'

const f = async (nums: number) => {
	console.log(nums)
	return nums
}

const g = (nums: number[]) => {
	console.log(nums)
	return Promise.all(nums.map(num => f(num)))
}

const fLoader = new Dataloader(g)

describe('dataloader', () => {
	it('simple', async () => {
		await fLoader.load(1)
		await fLoader.load(2)
		const result = await fLoader.loadMany([1, 3])
		result
	})
})
