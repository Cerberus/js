// @flow

const countries = {
	TH: 'Thailand',
	SG: 'Singapore',
}

type Country = $Keys<typeof countries>

const thailand: Country = 'TH'
// const test: Country = 'OTHER' // Error
