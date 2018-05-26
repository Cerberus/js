module.exports = function(wallaby) {
	return {
		files: ['index.js'],
		tests: ['__test__/*.js?(x)'],
		env: {
			type: 'node',
			params: { node: '--harmony' },
		},
		preprocessors: {
			'**/*.js': file =>
				require('babel').transform(file.content, { sourceMap: true }),
		},
		testFramework: 'jest',
	}
}
