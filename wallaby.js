module.exports = function(wallaby) {
	return {
		files: ['libs/*.js'],
		tests: ['__test__/*.js?(x)'],
		env: {
			type: 'node',
			jest: true,
			params: { node: '--harmony' },
		},
		compilers: {
			'**/*.js': wallaby.compilers.babel(),
		},
		testFramework: 'jest',
	}
}
