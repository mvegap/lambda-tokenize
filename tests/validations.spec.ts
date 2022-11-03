import { emailValidation } from '../src/shared/validations';

describe('Validations', () => {
  it('should return true for valid email', () => {
    const email = 'hola@hola.com';
    const result = emailValidation(email);
    expect(result).toBe(true);
  });

  it('should return false for invalid email', () => {
    const email = 'hola';
    const result = emailValidation(email);
    expect(result).toBe(false);
  });

  it('')
});