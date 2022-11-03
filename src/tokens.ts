import { APIGatewayProxyHandler } from 'aws-lambda';
import { cardNumberValidation, cvvValidation, emailValidation, expirationMonthValidation, expirationYearValidation } from './shared/validations';

export const handler: APIGatewayProxyHandler = async (event: any) => {
  let result = {
    statusCode: 200,
    body: JSON.stringify({}),
  };

  const { body } = event;

  const {
    email,
    card_number,
    cvv,
    expiration_year,
    expiration_month
  } = JSON.parse(body);

  if (!emailValidation(email)) {
    result.statusCode = 400;
    result.body = JSON.stringify({
      message: 'Invalid email',
    });
    return result;
  }

  if (!cardNumberValidation(card_number)) {
    result.statusCode = 400;
    result.body = JSON.stringify({
      message: 'Invalid card number',
    });
    return result;
  }

  if (!cvvValidation(cvv, card_number)) {
    result.statusCode = 400;
    result.body = JSON.stringify({
      message: 'Invalid cvv',
    });
    return result;
  }

  if (!expirationYearValidation(expiration_year)) {
    result.statusCode = 400;
    result.body = JSON.stringify({
      message: 'Invalid expiration year',
    });
    return result;
  }

  if (!expirationMonthValidation(expiration_month)) {
    result.statusCode = 400;
    result.body = JSON.stringify({
      message: 'Invalid expiration month',
    });
    return result;
  }

  const publishableKey = 'pk_test_123';

  result.body = JSON.stringify(({ publishableKey }));

  return result;
};
