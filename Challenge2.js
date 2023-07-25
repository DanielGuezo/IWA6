const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line
const taxAsDecimal = tax / '100'
const startingAfterTax = salary * '1' - taxAsDecimal
const balance = startingAfterTax - transport - food - rent

if (hourOfDay == null && minuteOfDay == null)
{console.log("R" + balance.toFixed(2))}else{console.log('I did nothing')} 


