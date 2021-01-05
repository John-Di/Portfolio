export const BACKGROUND_PSEUDO = (backgroundColor, backgroundImage, isSquare = false, pseudo = 'before') => `
	position: relative;

	&::${pseudo} {
		content: '';
		width: 100%;
		
		${backgroundColor ? `
			background-color: ${backgroundColor};
		` : ''}
		
		${backgroundImage ? `
			background-image: url('${backgroundImage}');
			background-position: center;
			background-size: cover;
			background-repeat: no-repeat;` :
		''}

		${isSquare ? `
			padding-top: 100%;` :
		''}		
	}
`

export const SQUARE_BACKGROUND = (...args) => BACKGROUND_PSEUDO(...args, true);

export const LOG_IT = (name = 'logit', callback) => {
	console.log(name, callback);
	return callback();
}
