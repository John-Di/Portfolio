export const BACKGROUND_PSEUDO = (backgroundColor, backgroundImage, isSquare = false, pseudo = 'before') => `
	&::${pseudo} {
		content: '';
		width: 100%;

		${isSquare ? `
			padding-top: 100%;` : ''}

		${backgroundImage ? `
			background-image: url('${backgroundImage}');
			background-position: center;
			background-size: cover;
			background-repeat: no-repeat;` :
		''}

		${backgroundColor ? `
			background-color: ${backgroundColor}
		` : ''}
	}
`

export const SQUARE_BACKGROUND = (...args) => BACKGROUND_PSEUDO(...args, true);

export const LOG_IT = (name = 'logit', callback) => {
	console.log(name, callback);
	return callback();
}
