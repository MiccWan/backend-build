module.exports = {
	"env": {
		"commonjs": true,
		"es6": true,
		"node": true
	},
	"extends": [
		"airbnb-base",
		"plugin:jsdoc/recommended"
	],
	"parser": "babel-eslint",
	"plugins": [
		"jsdoc"
	],
	"rules": {
		"linebreak-style": 0,
		"comma-dangle": 0,
		"prefer-arrow-callback": 0,
		"no-console": 0,
		"func-names": 0
	},
	settings: {
		"jsdoc": {
			"tagNamePreference": {
				"returns": "return",
				"abstract": "virtual"
			}
		},
		"import/resolver": {
			node: {},
			webpack: {}
		}
	}
};