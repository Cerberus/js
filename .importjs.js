// every file name must be unique for auto import feature
module.exports = {
	excludes: ['__tests__/**'],
	useRelativePaths: false,
	tab: '\t',
	importStatementFormatter({ importStatement }) {
		return importStatement
			.replace(/;$/, '')
			.replace(/src\//, '')
			.replace(/type {/, '{ type')
	},
}
