const stringToNumber = str => str.toLowerCase().split('').map(char => char.charCodeAt(0) - 65).join('');

export default stringToNumber;