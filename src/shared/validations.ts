// validation email
export const emailValidation = (email: string) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
};

// validation expiration_year 5 years
export const expirationYearValidation = (expirationYear: number) => {
  const currentYear = new Date().getFullYear();
  const expirationYearValidation = currentYear + 5;
  return expirationYear <= expirationYearValidation;
}

// validation expiration_month 12 months
export const expirationMonthValidation = (expirationMonth: number) => {
  return expirationMonth <= 12;
}

// validation cvv if visa/mastercard 3 digits or amex 4 digits
export const cvvValidation = (cvv: number, cardNumber: string) => {
  const cardNumberLength = cardNumber.length;
  const cvvLength = cvv.toString().length;
  if (cardNumberLength === 15) {
    return cvvLength === 4;
  } else {
    return cvvLength === 3;
  }
}

// validation card_number LUHN algorithm
export const cardNumberValidation = (cardNumber: string) => {
  const cardNumberLength = cardNumber.length;
  let sum = 0;
  let shouldDouble = false;
  for (let i = cardNumberLength - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber.charAt(i));
    if (shouldDouble) {
      if ((digit *= 2) > 9) digit -= 9;
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  return sum % 10 === 0;
}
