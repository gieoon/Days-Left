// Add this script as a trigger in Google AppScript to send to yourself every day so that you stop wasting time on things that don't matter.

const myEmailAddress = "my-email@gmail.com";
const targetDate = new Date(2075, 0, 13); // Date in the future to target countdown from.

function sendSimpleEmail(recipient, subject, message) {
  MailApp.sendEmail({
    to: recipient,
    subject: subject,
    body: message
  });
}

function getDaysDifference(otherDate) {
  const today = new Date();
  const compareDate = otherDate;
  
  // Set both dates to midnight to ensure we only count full days
  today.setHours(0, 0, 0, 0);
  compareDate.setHours(0, 0, 0, 0);
  
  // Calculate difference in milliseconds
  const diffMillis = compareDate - today;
  
  // Convert to days
  const diffDays = Math.round(diffMillis / (1000 * 60 * 60 * 24));
  
  return diffDays;
}

function addCommasSimple(number) {
  return number.toLocaleString();
}

// Example usage:
function sendDaysLeftEmail() {
  nDays = addCommasSimple(getDaysDifference(targetDate));

  sendSimpleEmail(
    myEmailAddress,
    `You have ${nDays} sunsets left`,
    `You have ${nDays} sunsets left if you live until 80. Don't waste them.`
  );
}
