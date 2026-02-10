/* Short timestamp UID generator for "The Archive" app

License: CC-BY-4.0
Author: JW

*/


function convertToBase40(number) {
	// If changing these, make sure the string length is at least 40 chars
	const chartable = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖÜ";
	
	let result = "";
   while (number > 0)
	{
		let remainder = number % 40;
		result = chartable[remainder] + result;
		number = Math.floor(number / 40);
	}

	return result || charset[0];
}

const date = new Date();
const dstr = date.toISOString()
const year = dstr.slice(2,4);
const month = dstr.slice(5,7).toString();
const day = dstr.slice(8,10);
const timestampMinutes = (date.getHours() * 60) + date.getMinutes();
const timestampMinutesB40 = convertToBase40(timestampMinutes);

timestamp = `${year}${month}${day}${timestampMinutesB40}`;
output.insert.text = timestamp;
