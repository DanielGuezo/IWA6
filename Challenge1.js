const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

//const primaryValid = typeof number == primaryPhone
const primaryValid = Number(primaryPhone) ? true: false;
{console.log('Primary phone is valid numerical string:', primaryValid)}


const secondaryValid = Number(secondaryPhone) ? true: false;
{console.log('Secondary phone is valid numerical string:', secondaryValid )}

