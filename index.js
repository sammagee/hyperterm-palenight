
const backgroundColor = '#292D3E'
const foregroundColor = '#959DCB'
const cursorColor = '#FFCC00'
const borderColor = backgroundColor

const colors = {
	black        : backgroundColor,
	red          : '#F07178',
	green  		 : '#C3E88D',
	yellow       : '#FFCB6B',
	blue         : '#82AAFF',
	magenta      : '#C792EA',
	cyan         : '#89DDFF',
	white        : foregroundColor,
	lightBlack   : '#434758',
	lightRed     : '#FF8B92',
	lightGreen   : '#DDFFA7',
	lightYellow  : '#FFE585',
	lightBlue    : '#9CC4FF',
	lightMagenta : '#E1ACFF',
	lightCyan    : '#A3F7FF',
	colorCubes   : '#ffffff',
	grayscale    : foregroundColor
}

exports.decorateConfig = config => {
	return Object.assign({}, config, {
		foregroundColor,
		backgroundColor,
		borderColor,
		cursorColor,
		colors,
		termCSS: `
			${config.termCSS || ''}
			.cursor-node {
				mix-blend-mode: difference;
				border-left-width: 2px;
			}
		`,
	})
}
