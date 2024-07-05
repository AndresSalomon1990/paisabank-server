/**
 * CustomError class extends the built-in Error class.
 * It has a constructor that initializes a new instance with a message and a status code.
 */
export class CustomError extends Error {
  message: string;
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}
