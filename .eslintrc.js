/**
 * @package     AlphaBot-cli
 * @version     1.0.0
 * @author      Vu Minh Nhat
 * @link        https://github.com/nhatcaygames/alphabot-cli
 * @link        https://www.facebook.com/taolagin2003
 */
module.exports = {
    env: {
		commonjs: true,
		es2020: true,
		node: true
	},
	extends: 'eslint:recommended',
	parserOptions: {
		ecmaVersion: 12
	},
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always']
	},
	globals: {
		alphabot: 'writable',
		loader: 'readable',
		fca: 'readable'
	}
};