export const BACKGROUND_PSEUDO = (isSquare = false, backgroundColor = null, backgroundImage = null, pseudo = 'before') => `
	position: relative;

	&::${pseudo} {
		content: '';
		width: 100%;
		display: block;
		
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

export const SQUARE_BACKGROUND = (...args) => BACKGROUND_PSEUDO(true, ...args);

export const LOG_IT = (name = 'logit', callback) => {
	console.log(name, callback);
	return callback();
}
