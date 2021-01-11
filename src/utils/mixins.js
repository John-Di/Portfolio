export const BACKGROUND_PSEUDO = ({ isSquare = false, backgroundColor = null, overlay, backgroundImage = null, pseudo = 'before' }) => `
	position: relative;

	&::${pseudo} {
		${overlay ? `content: '';` : ``}
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

export const SQUARE_BACKGROUND = (props) => BACKGROUND_PSEUDO({ isSquare: true, ...props });

export const LOG_IT = (name = 'logit', callback) => {
	console.log(name, callback);
	return callback();
}
