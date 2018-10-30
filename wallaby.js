module.exports = function(wallaby) {
	return {
		files: ['files/*.js'],
		tests: ['__tests__/*.js?(x)'],
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
