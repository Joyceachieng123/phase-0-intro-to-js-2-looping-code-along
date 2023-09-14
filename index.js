function writeCards(names, event) {
  const thankYouMessages = [];
  for (let i = 0; i < names.length; i++) {
    thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return thankYouMessages;
}

// Define the countDown function
function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}
